function firstUpper(string) {
    if (string) {
        let copy = string.toString().trim();
        return copy.charAt(0).toUpperCase() + copy.slice(1).toLowerCase();
    }
    return "";
}

module.exports.firstUpper = firstUpper;