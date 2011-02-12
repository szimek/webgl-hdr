THREE.utils = {};

// Classical inheritance using proxy function
// (very simplifed version of Y.extend from YUI 3)
// from Javascript Patterns by Stoyan Stefanov
THREE.utils.extend = (function () {
    var F = function () {};
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.superclass = P.prototype;
        C.prototype.constructor = C;
        return C;
    };
})();

THREE.filters = {};

// Basic filter - does nothing
THREE.filters.Basic = function (image, shader) {
    this.camera = new THREE.Camera();
    this.camera.position.z = 1;

    this.mesh = new THREE.Mesh( new Plane( 2, 2 ) );

    this.scene = new THREE.Scene();
    this.scene.addObject(this.mesh);

    this.renderTargetSettings = {
        format: THREE.RGBFormat,
        type: THREE.FloatType,
        wrap_s: THREE.ClampToEdgeWrapping,
        wrap_t: THREE.ClampToEdgeWrapping,
        min_filter: THREE.NearestFilter,
        mag_filter: THREE.NearestFilter
    };

    this.renderTarget = new THREE.RenderTarget( image.width, image.height, this.renderTargetSettings);

    this.material = new THREE.MeshShaderMaterial({
        uniforms: shader.uniforms,
        vertex_shader: shader.vertex,
        fragment_shader: shader.fragment
    });

    this.mesh.materials = [this.material];
};
THREE.filters.Basic.prototype.process = function (renderer, renderToScreen) {
    var target = renderToScreen ? undefined : this.renderTarget;
    renderer.render(this.scene, this.camera, target);
};


// PNG HDR decode filter
THREE.filters.PNGHDRDecode = function (texture, shaders) {
    var shader = {
        uniforms: {
            tPNG: { type: "t", value: 0, texture: texture }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/png_decode"]
    };

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.PNGHDRDecode, THREE.filters.Basic);


// Grayscale filter - converts texture to grayscale using R*0.27 G*0.67 B*0.006
THREE.filters.Grayscale = function (texture, shaders) {
    var shader = {
        uniforms: {
            tHDR: { type: "t", value: 0, texture: texture }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/rgb2y"]
    };

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.Grayscale, THREE.filters.Basic);


// Gaussian filter - blurs texture
THREE.filters.Gaussian = function (texture, shaders) {
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
        vertex: shaders["vs/convolution"],
        fragment: shaders["fs/convolution"]
    };

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.Gaussian, THREE.filters.Basic);
THREE.filters.Gaussian.prototype.process = function (renderer) {
    // Horizontal pass
    this.material.uniforms.tLuminanceMap.texture = this.inputTexture;
    this.material.uniforms.uImageIncrement.value = this.blurX;
    renderer.render( this.scene, this.camera, this.renderTargetTemp );

    // Vertical pass
    this.material.uniforms.tLuminanceMap.texture = this.renderTargetTemp;
    this.material.uniforms.uImageIncrement.value = this.blurY;
    renderer.render( this.scene, this.camera, this.renderTarget );
};

// Bilateral filter - just like Gaussian, but preserves edges
THREE.filters.Bilateral = function (texture, shaders) {
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

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.Bilateral, THREE.filters.Basic);
THREE.filters.Bilateral.prototype.process = function (renderer) {
    // Horizontal pass
    this.material.uniforms.tLuminanceMap.texture = this.inputTexture;
    this.material.uniforms.uImageIncrement.value = this.blurX;
    renderer.render( this.scene, this.camera, this.renderTargetTemp );

    // Vertical pass
    this.material.uniforms.tLuminanceMap.texture = this.renderTargetTemp;
    this.material.uniforms.uImageIncrement.value = this.blurY;
    renderer.render( this.scene, this.camera, this.renderTarget );
};


THREE.filters.NoneTMO = function(texture, shaders) {
    var shader = {
        uniforms: {
            tHDR: { type: "t", value: 0, texture: texture },
            fExposure: { type: "f", value: 0.1 },
            fGamma: { type: "f", value: 2.2 }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/tmo/none"]
    };

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.NoneTMO, THREE.filters.Basic);
THREE.filters.NoneTMO.prototype.name = "none";


THREE.filters.Durand02TMO = function(texture, shaders) {
    this.luminanceFilter = new THREE.filters.Grayscale(texture, shaders);
    this.bilateralFilter = new THREE.filters.Bilateral(this.luminanceFilter.renderTarget, shaders);

    var shader = {
        uniforms: {
            tHDR: { type: "t", value: 0, texture: texture },
            tLuminanceMap: { type: "t", value: 1, texture: this.luminanceFilter.renderTarget },
            tBilateralMap: { type: "t", value: 2, texture: this.bilateralFilter.renderTarget },
            fExposure: { type: "f", value: 0.1 },
            fGamma: { type: "f", value: 2.2 }
        },
        vertex: shaders["vs/basic"],
        fragment: shaders["fs/tmo/Durand02"]
    };

    this.constructor.superclass.constructor.apply(this, [texture, shader]);
};
THREE.utils.extend(THREE.filters.Durand02TMO, THREE.filters.Basic);
THREE.filters.Durand02TMO.prototype.process = function(renderer, renderToScreen) {
    this.luminanceFilter.process(renderer);
    this.bilateralFilter.process(renderer);
    this.constructor.superclass.process.apply(this, [renderer, renderToScreen]);
};
THREE.filters.Durand02TMO.prototype.name = "Durand02";


// Calculates approximated average, maximum and minimum image intentsity
// THREE.filters.Luminance = function (texture, shaders) {
//     var shader = {
//         uniforms: {
//             tHDR: { type: "t", value: 0, texture: texture }
//         },
//         vertex: shaders["vs/luminance"],
//         fragment: shaders["fs/luminance"]
//     };
//
//     this.constructor.superclass.constructor.apply(this, [texture, shader]);
// };


// TODO: move this stuff into some namespace
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
