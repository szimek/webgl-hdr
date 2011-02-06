var statsEnabled = true,
    stats,
    container,
    renderer,
    gui,

    // Shader attributes
    exposure = 0.3,

    // Filters
    pngFilter,
    noneTMO,
    durand02TMO,
    tmo,

    // WebGL extensions
    glExtFT;

init();

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    // Stats
    if ( statsEnabled ) {
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );
    }

    // GUI
    gui = new GUI();
    gui.add(window, "exposure", 0, 10, 0.025).name("Exposure");
    gui.show();

    // Image file
    var imageTexture = ImageUtils.loadTexture( "images/memorial.png", new THREE.UVMapping(), function (image) {
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

        // Load all required shaders
        ShaderUtils.load(["vs/basic", "fs/png_decode", "fs/rgb2y", "vs/bilateral", "fs/bilateral", "fs/tmo/none", "fs/tmo/Durand02"], function (err, shaders) {
            if (err) {
                alert("Couldn't load all shaders.");
                return;
            }

            // Setup filters
            pngFilter = new THREE.filters.PNGHDRDecode(imageTexture, shaders);
            noneTMO = new THREE.filters.NoneTMO(pngFilter.renderTarget, shaders);
            durand02TMO = new THREE.filters.Durand02TMO(pngFilter.renderTarget, shaders);

            // Set current TMO
            tmo = durand02TMO;

            // Decode HDR image file
            pngFilter.process(renderer);

            // Render loop
            setInterval( loop, 1000 / 60);
        });
    });

    imageTexture.min_filter = THREE.LinearFilter;
    imageTexture.mag_filter = THREE.LinearFilter;
}

function loop() {
    // TODO: add options param to Filter#process instead
    tmo.material.uniforms.fExposure.value = exposure;

    // Map HDR image to LDR
    tmo.process(renderer, true);

    // Mark end of frame for WebGL Inspector
    if ( glExtFT ) glExtFT.frameTerminator();

    if ( statsEnabled ) stats.update();
}
