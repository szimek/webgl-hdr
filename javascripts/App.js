var statsEnabled = true;

var container, stats;

var renderer;

var imageTexture;

// Shader attributes
var exposure = { max: 1.0, min: 0.0, step: 0.01, value: 0.2 };

// Filters
var pngFilter,
    noneTMO,
    durand02TMO,
    tmo;

// Extensions
var glExtFT;

init();

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

        // Renderer
        renderer = new THREE.WebGLRenderer( false );
        renderer.setSize( image.width, image.height );
        container.appendChild( renderer.domElement );

        // Enable floating point texture extension
        if ( !renderer.context.getExtension("OES_texture_float") ) {
            alert("Your browser doesn't support required OES_texture_float extension.");
            return;
        }

        // Enable 'WebGL Inspector' frame termination extension
        glExtFT = renderer.context.getExtension("GLI_frame_terminator");

        ShaderUtils.load(["vs/basic", "fs/png_decode", "fs/rgb2y", "vs/bilateral", "fs/bilateral", "fs/tmo/none", "fs/tmo/Durand02"], function (err, shaders) {
            if (err) {
                alert("Couldn't load all shaders.");
                return;
            }

            // Setup filters
            pngFilter = new app.filters.PNGHDRDecode(imageTexture, shaders);
            noneTMO = new app.filters.NoneTMO(pngFilter.renderTarget, shaders);
            durand02TMO = new app.filters.Durand02TMO(pngFilter.renderTarget, shaders);

            tmo = durand02TMO;

            // Render loop
            setInterval( loop, 1000 / 60);
        });
    });

    imageTexture.min_filter = THREE.LinearFilter;
    imageTexture.mag_filter = THREE.LinearFilter;
}

function loop() {
    pngFilter.process(renderer);
    tmo.process(renderer, true);

    // Mark end of frame for WebGL Inspector
    if ( glExtFT ) glExtFT.frameTerminator();

    if ( statsEnabled ) stats.update();
}
