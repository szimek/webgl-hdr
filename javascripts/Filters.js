var app = {};

app.Filter = function () {};
app.Filter.prototype.setup = function (image) {
    var halfX = image.width / 2,
        halfY = image.height / 2;
    this.camera = new THREE.Camera();
    this.camera.projectionMatrix = THREE.Matrix4.makeOrtho( -halfX, halfX, halfY, -halfY, -1, 1 );
    this.camera.position.z = 1;

    this.mesh = new THREE.Mesh( new Plane( image.width, image.height ) );

    this.scene = new THREE.Scene();
    this.scene.addObject(this.mesh);

    this.renderTarget = new THREE.RenderTarget( image.width, image.height, {
        format: THREE.RGBFormat,
        type: THREE.FloatType,
        wrap_s: THREE.ClampToEdgeWrapping,
        wrap_t: THREE.ClampToEdgeWrapping,
        min_filter: THREE.NearestFilter,
        mag_filter: THREE.NearestFilter
    });

    this.material = null;
};
app.Filter.prototype.process = function(renderer, renderToScreen) {
    var target = renderToScreen ? undefined : this.renderTarget;
    renderer.render(this.scene, this.camera, target);
};


app.filters = {};

app.filters.PNGHDRDecode = function (texture, shaders) {
    app.Filter.call(this);

    this.setup(texture);

    var shader = {
        uniforms: {
            tPNG: { type: "t", value: 0, texture: texture }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/png_decode"]
    };

    this.material = new THREE.MeshShaderMaterial({
        uniforms: shader.uniforms,
        vertex_shader: shader.vertex,
        fragment_shader: shader.fragment
    });

    this.mesh.materials = [this.material];
};
app.filters.PNGHDRDecode.prototype = new app.Filter();


app.filters.Grayscale = function (texture, shaders) {
    app.Filter.call(this);

    this.setup(texture);

    var shader = {
        uniforms: {
            tHDR: { type: "t", value: 0, texture: texture }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/rgb2y"]
    };

    this.material = new THREE.MeshShaderMaterial({
        uniforms: shader.uniforms,
        vertex_shader: shader.vertex,
        fragment_shader: shader.fragment
    });

    this.mesh.materials = [this.material];
};
app.filters.Grayscale.prototype = new app.Filter();


app.filters.Bilateral = function (texture, shaders) {
    app.Filter.call(this);

    this.setup(texture);

    this.inputTexture = texture;

    this.renderTargetTemp = new THREE.RenderTarget( texture.width, texture.height, {
        format: THREE.RGBFormat,
        type: THREE.FloatType,
        wrap_s: THREE.ClampToEdgeWrapping,
        wrap_t: THREE.ClampToEdgeWrapping,
        min_filter: THREE.NearestFilter,
        mag_filter: THREE.NearestFilter
    });

    var sigma  = 0.35 * Math.pow(1.6, 6),
        kernel = buildKernel( sigma );

    this.blurX = new THREE.Vector2( 1 / texture.width, 0 );
    this.blurY = new THREE.Vector2( 0, 1 / texture.height );

    var shader = {
        uniforms: {
            tLuminanceMap: { type: "t", value: 0, texture: texture },
            uImageIncrement: { type: "v2", value: this.blurX },
            cKernel: { type: "fv1", value: kernel }
        },
        vertex: shaders["vs/bilateral"],
        fragment: shaders["fs/bilateral"]
    };

    this.material = new THREE.MeshShaderMaterial({
        uniforms: shader.uniforms,
        vertex_shader: shader.vertex,
        fragment_shader: shader.fragment
    });

    this.mesh.materials = [this.material];
};
app.filters.Bilateral.prototype = new app.Filter();
app.filters.Bilateral.prototype.process = function (renderer) {
    // Horizontal pass
    this.material.uniforms.tLuminanceMap.texture = this.inputTexture;
    this.material.uniforms.uImageIncrement.value = this.blurX;
    renderer.render( this.scene, this.camera, this.renderTargetTemp );

    // Vertical pass
    this.material.uniforms.tLuminanceMap.texture = this.renderTargetTemp;
    this.material.uniforms.uImageIncrement.value = this.blurY;
    renderer.render( this.scene, this.camera, this.renderTarget );
};


app.filters.Durand02TMO = function(hdrTexture, luminanceTexture, bilateralTexture, shaders) {
    app.Filter.call(this);

    this.setup(hdrTexture);

    var shader = {
        uniforms: {
            tHDR: { type: "t", value: 0, texture: hdrTexture },
            tLuminanceMap: { type: "t", value: 1, texture: luminanceTexture },
            tBilateralMap: { type: "t", value: 2, texture: bilateralTexture },
            fExposure: { type: "f", value: 0.1 }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/tmo/Durand02"]
    };

    this.material = new THREE.MeshShaderMaterial({
        uniforms: shader.uniforms,
        vertex_shader: shader.vertex,
        fragment_shader: shader.fragment
    });

    this.mesh.materials = [this.material];
};
app.filters.Durand02TMO.prototype = new app.Filter();

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
