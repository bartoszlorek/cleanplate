var median = require('./utils/median');

function sample(files) {
    var image = files[0];

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        var red = [],
            green = [],
            blue = [];

        files.forEach(file => {
            red.push(file.bitmap.data[idx]);
            green.push(file.bitmap.data[idx + 1]);
            blue.push(file.bitmap.data[idx + 2]);
        });

        image.bitmap.data[idx] = median(red);
        image.bitmap.data[idx + 1] = median(green);
        image.bitmap.data[idx + 2] = median(blue);
    });

    return image;
}

module.exports = sample;