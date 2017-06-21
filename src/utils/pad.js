function pad(num, size) {
    var string = num + '';
    while (string.length < size) {
        string = '0' + string;
    }
    return string;
}

module.exports = pad;