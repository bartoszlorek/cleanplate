function countChar(string, char) {
    var parts = string.split(char);
    return parts.length - 1;
}

module.exports = countChar;