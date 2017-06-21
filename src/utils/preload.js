var jimp = require('jimp');

function preload(files, callback) {
    var loaded = [];

    files.forEach(path => {
        jimp.read(path, (error, file) => {
            if (error) {
                throw error;
            }
            loaded.push(file);
            if (loaded.length === files.length) {
                callback(loaded);
                loaded = null;
            }
        });
    });
}

module.exports = preload;