ShaderUtils.load = function(shaders, callback) {
    var prefix = "shaders",
        extension = ".fx",
        counter = 0,
        result = {},
        xhr;

    shaders = [].concat(shaders);

    function onreadystatechange() {
        var xhr = this;

        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                result[xhr.shader] = xhr.responseText;
                counter++;
                if (counter == shaders.length ) callback(null, result);
            } else {
                callback(xhr.status);
                callback = function () {};
            }
        }
    }

    for (var i = 0, l = shaders.length; i < l; i++) {
        xhr = new XMLHttpRequest();
        xhr.shader = shaders[i];
        xhr.open("get", prefix + "/" +shaders[i] + extension, true);
        xhr.onreadystatechange = onreadystatechange;
        xhr.send(null);
    }
};
