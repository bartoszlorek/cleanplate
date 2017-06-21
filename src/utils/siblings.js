function siblings(index, range, min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    if (max - min < range * 2) {
        return [min, max];
    }
    var start = index - range,
        end = index + range;

    if (start < min) {
        end += min - start;
        start = min;
    }
    if (end > max) {
        start -= end - max;
        end = max;
    }
    return [start, end];
}

module.exports = siblings;