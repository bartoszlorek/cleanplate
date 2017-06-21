var sample = require('./sample');
var preload = require('./utils/preload');

var files = [
    './frames/traffic/traffic_000.jpg',
    './frames/traffic/traffic_005.jpg',
    './frames/traffic/traffic_010.jpg',
    './frames/traffic/traffic_015.jpg',
    './frames/traffic/traffic_020.jpg',
    './frames/traffic/traffic_025.jpg',
    './frames/traffic/traffic_030.jpg'
];

preload(files, loaded => {
    var image = sample(loaded);
    image.write('./frames/cleanplate.jpg');
});