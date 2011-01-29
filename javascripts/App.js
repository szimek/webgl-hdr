var statsEnabled = true;

var container, stats;

var camera, mesh, scene, renderer;

// Textures
var imageTexture,
    hdrTexture,
    luminanceTexture,
    bilateralTextureX, bilateralTextureY;

// Shader attributes
var exposure = { max: 1.0, min: 0.0, step: 0.01, value: 0.2 }, kernel, blurX, blurY;

// Materials
var pngDecodeMaterial,
    luminanceMaterial,
    bilateralMaterial,
    toneMappingMaterial;

// Filter
var luminanceFilter,
    pngFilter;

// Extensions
var glExtFT;

init();

//
// Gauss related stuff
//
function gauss(x, sigma) {
    // return 1.0 / (sigma * Math.sqrt(2 * Math.PI)) * Math.exp( - (x * x) / (2.0 * sigma * sigma));
    return Math.exp( - (x * x) / (2.0 * sigma * sigma));
}

function buildKernel(sigma) {
    var kMaxKernelSize = 43,
        kernelSize = 43, // 2 * Math.ceil( sigma * 3.0 ) + 1,
        i;

    if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;
    var halfWidth = ( kernelSize - 1 ) * 0.5;

    var values = new Array( kernelSize );
    var sum = 0.0;
    for( i = 0; i < kernelSize; ++i ) {
        values[ i ] = gauss( i - halfWidth, sigma );
        sum += values[ i ];
    }

    // normalize the kernel
    for( i = 0; i < kernelSize; ++i ) values[ i ] /= sum;

    return values;
}

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    // Controls
    window.addEventListener("DOMContentLoaded", function (event) {
        var exposureSlider = document.getElementById("exposure");
        exposureSlider.value = exposure.value * 100;
        exposureSlider.max = exposure.max * 100;
        exposureSlider.min = exposure.min * 100;
        exposureSlider.step = exposure.step * 100;

        exposureSlider.addEventListener("change", function (event) {
            exposure.value = this.value / 100;
        }, false);
    }, false);

    // Stats
    if ( statsEnabled ) {

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );

    }

    // Image file
    imageTexture = ImageUtils.loadTexture( "images/memorial.png", new THREE.UVMapping(), function (image) {
        imageTexture.width = image.width;
        imageTexture.height = image.height;

        // Camera
        var halfX = image.width / 2,
            halfY = image.height / 2;
        camera = new THREE.Camera();
        camera.projectionMatrix = THREE.Matrix4.makeOrtho( -halfX, halfX, halfY, -halfY, -1, 1 );
        camera.position.z = 1;

        // Mesh (without any material yet)
        mesh = new THREE.Mesh( new Plane( image.width, image.height ) );

        // Scene
        scene = new THREE.Scene();
        scene.addObject(mesh);

        var shader, uniforms;
        var renderTargetSettings = {
            format: THREE.RGBFormat,
            type: THREE.FloatType,
            wrap_s: THREE.ClampToEdgeWrapping,
            wrap_t: THREE.ClampToEdgeWrapping,
            min_filter: THREE.NearestFilter,
            mag_filter: THREE.NearestFilter
        };

        // Renderer
        renderer = new THREE.WebGLRenderer( false );
        renderer.setSize( image.width, image.height );
        container.appendChild( renderer.domElement );

        // Enable floating point texture support
        if ( !renderer.context.getExtension("OES_texture_float") ) {
            alert("Your browser doesn't support required OES_texture_float extension.");
            return;
        }

        // WebGL Inspector extensions
        glExtFT = renderer.context.getExtension("GLI_frame_terminator");

        ShaderUtils.load(["vs/basic", "fs/png_decode", "fs/rgb2y", "vs/bilateral", "fs/bilateral", "fs/tmo/none", "fs/tmo/Durand02"], function (err, shaders) {
            if (err) {
                alert("Couldn't load all shaders.");
                return;
            }

            //
            // Setup stuff for decoding PNG HDR image
            //
            // Render target
            hdrTexture = new THREE.RenderTarget( image.width, image.height, renderTargetSettings);

            // Material
            shader = {
                uniforms: {
                    tPNG: { type: "t", value: 0, texture: imageTexture }
                },
                vertex: shaders["vs/basic"],
                fragment: shaders["fs/png_decode"]
            };

            pngDecodeMaterial = new THREE.MeshShaderMaterial({
                    uniforms: shader.uniforms,
                    vertex_shader: shader.vertex,
                    fragment_shader: shader.fragment
            });

            //
            // Setup stuff for luminance map calculations
            //
            // Render target
            luminanceTexture = new THREE.RenderTarget( image.width, image.height, renderTargetSettings);

            // Material
            shader = {
                uniforms: {
                    tHDR: { type: "t", value: 0, texture: hdrTexture }
                },
                vertex: shaders["vs/basic"],
                fragment: shaders["fs/rgb2y"]
            };

            luminanceMaterial = new THREE.MeshShaderMaterial({
                uniforms: shader.uniforms,
                vertex_shader: shader.vertex,
                fragment_shader: shader.fragment
            });

            //
            // Setup stuff for bilateral filter
            //
            // Kernel
            var sigma  = 0.35 * Math.pow(1.6, 6);
            kernel = buildKernel( sigma );
            blurX = new THREE.Vector2( 1 / image.width, 0 );
            blurY = new THREE.Vector2( 0, 1 / image.height );

            // Render targets
            bilateralTextureX = new THREE.RenderTarget(
                image.width,
                image.height,
                renderTargetSettings
            );

            bilateralTextureY = new THREE.RenderTarget(
                image.width,
                image.height,
                renderTargetSettings
            );

            // Material
            shader = {
                uniforms: {
                    tLuminanceMap: { type: "t", value: 0, texture: null },
                    uImageIncrement: { type: "v2", value: blurX },
                    cKernel: { type: "fv1", value: kernel }
                },
                vertex: shaders["vs/bilateral"],
                fragment: shaders["fs/bilateral"]
            };

            bilateralMaterial = new THREE.MeshShaderMaterial({
                uniforms: shader.uniforms,
                vertex_shader: shader.vertex,
                fragment_shader: shader.fragment
            });

            //
            // Setup stuff for tone-mapping
            //
            // Material
            shader = {
                uniforms: {
                    tHDR: { type: "t", value: 0, texture: hdrTexture },
                    tLuminanceMap: { type: "t", value: 1, texture: luminanceTexture },
                    tBilateralMap: { type: "t", value: 2, texture: bilateralTextureY },
                    fExposure: { type: "f", value: exposure.value }
                },
                vertex: shaders["vs/basic"],
                fragment: shaders["fs/tmo/Durand02"]
            };

            toneMappingMaterial = new THREE.MeshShaderMaterial({
                uniforms: shader.uniforms,
                vertex_shader: shader.vertex,
                fragment_shader: shader.fragment
            });

            pngFilter = new app.filters.PNGHDRDecode(imageTexture, shaders);
            luminanceFilter = new app.filters.Grayscale(hdrTexture, shaders);

            // Render loop
            setInterval( loop, 1000 / 60);
        });
    });

    imageTexture.min_filter = THREE.LinearFilter;
    imageTexture.mag_filter = THREE.LinearFilter;
}

function loop() {
    // Decode PNG HDR
    mesh.materials = [pngDecodeMaterial];
    renderer.render( scene, camera, hdrTexture );
    // hdrTexture = pngFilter.process(renderer);

    // Calculate luminance
    // mesh.materials = [luminanceMaterial];
    // renderer.render( scene, camera, luminanceTexture );
    luminanceTexture = luminanceFilter.process(renderer);

    // Horizontal bilateral pass
    mesh.materials = [ bilateralMaterial ];
    bilateralMaterial.uniforms.tLuminanceMap.texture = luminanceTexture;
    bilateralMaterial.uniforms.uImageIncrement.value = blurX;
    renderer.render( scene, camera, bilateralTextureX );

    // Vertical bilateral pass
    bilateralMaterial.uniforms.tLuminanceMap.texture = bilateralTextureX;
    bilateralMaterial.uniforms.uImageIncrement.value = blurY;
    renderer.render( scene, camera, bilateralTextureY );

    // Perform tone mapping of HDR image
    toneMappingMaterial.uniforms[ "fExposure" ].value = exposure.value;
    mesh.materials = [toneMappingMaterial];
    renderer.render( scene, camera );

    // Mark frame end for WebGL Inspector
    if ( glExtFT ) glExtFT.frameTerminator();

    if ( statsEnabled ) stats.update();
}
