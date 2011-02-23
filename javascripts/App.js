// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
            };
})();

var app = (function () {
    var module = {};

    // Private vars
    var stats,
        container,
        renderer,

        // Filters
        pngDecoder,

        // WebGL extensions
        glExtFT;

    // Private functions
    function render() {
        // TODO: pass params to Filter#process instead
        module.currentTMO.material.uniforms.fExposure.value = module.settings.exposure;
        module.currentTMO.material.uniforms.fGamma.value = module.settings.gamma;

        // Map HDR image to LDR and render result to screen
        module.currentTMO.process(renderer, true);

        // Mark end of frame for WebGL Inspector
        if ( glExtFT ) glExtFT.frameTerminator();

        if ( module.statsEnabled ) stats.update();
    }

    function loop() {
        render();
        requestAnimFrame( loop );
    }


    // Public vars
    module.statsEnabled = true;
    module.tmos = {};

    module.__defineSetter__("currentTMOName", function (tmo) {
        this.currentTMO = this.tmos[tmo];
    });
    module.__defineGetter__("currentTMOName", function () {
        return this.currentTMO.name;
    });

    // TMO attributes (common for all TMOs)
    module.settings = {
        exposure: 0.2,
        gamma: 2.2
    };

    // Public methods
    module.init = function () {
        var self = this; // could just use 'module' instead

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        // Stats
        if ( this.statsEnabled ) {
            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            stats.domElement.style.zIndex = 100;
            container.appendChild( stats.domElement );
        }

        // Load image
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

            // Load all shaders
            ShaderUtils.load(["vs/basic", "fs/png_decode", "fs/rgb2y", "vs/bilateral", "fs/bilateral", "fs/tmo/none", "fs/tmo/Durand02"], function (err, shaders) {
                if (err) {
                    alert("Couldn't load all shaders.");
                    return;
                }

                // Setup filters
                pngDecoder = new THREE.filters.PNGHDRDecode(imageTexture, shaders);
                self.tmos["none"] = new THREE.filters.NoneTMO(pngDecoder.renderTarget, shaders);
                self.tmos["Durand02"] = new THREE.filters.Durand02TMO(pngDecoder.renderTarget, shaders);

                // Decode HDR image file
                pngDecoder.process(renderer);

                // Set initial tone mapping operator
                self.currentTMOName = "Durand02";

                // GUI
                var gui, options;
                gui = new GUI();
                options = Object.keys(self.tmos);
                gui.name("Tone mapping operators");
                gui.add(self, "currentTMOName").name("Selected TMO").options(options);
                gui.show();

                gui = new GUI();
                gui.name("Settings");
                gui.add(self.settings, "exposure", 0, 10, 0.025).name("Exposure");
                gui.add(self.settings, "gamma", 0.1, 3, 0.1).name("Gamma");
                gui.show();

                // Start render loop
                loop();
            });
        });

        imageTexture.min_filter = THREE.LinearFilter;
        imageTexture.mag_filter = THREE.LinearFilter;
    };

    return module;
})();

app.init();
