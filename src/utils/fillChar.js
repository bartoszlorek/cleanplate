function fillChar(char, num) {
    var string = '';
    while (num > 0) {
        string += char;
        num -= 1;
    }
    return string;
}

module.exports = fillChar;