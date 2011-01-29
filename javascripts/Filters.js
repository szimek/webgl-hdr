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
app.Filter.prototype.process = function(renderer) {
    renderer.render(this.scene, this.camera, this.renderTarget);
    return this.renderTarget;
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
