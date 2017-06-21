var countChar = require('./countChar');
var fillChar = require('./fillChar');
var pad = require('./pad');

function sequence(path, min, max) {
    var size = countChar(path, '#'),
        hash = fillChar('#', size),
        index = min,
        files = [],
        name;

    while (index <= max) {
        name = pad(index, size);
        files.push(path.replace(hash, name));
        index += 1;
    }
    return files;
}

module.exports = sequence;