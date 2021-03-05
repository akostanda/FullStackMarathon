class StrFrequency {
    constructor(string) {
        this.string = string;
    }
    letterFrequencies() {
        const obj = {};
        if (typeof(this.string) === "string") {
            let copyStr = this.string.toUpperCase();

            for (let char in copyStr) {
                if (copyStr[char].match(/[a-z]/i) && obj[copyStr[char]] === undefined) {
                    obj[copyStr[char].toUpperCase()] = copyStr.split(
                        new RegExp("[" + copyStr[char] + "]", "i")).length - 1;
                }
            }
        }
        return obj;
    }

    wordFrequencies() {
        const obj = {};
        if (this.string === "") {
            obj[""] = 1;
            return obj;
        }
        if (typeof(this.string) === "string") {
            let allowedWord = /[a-z]/i;
            let wordArr = this.string.toUpperCase().split(/[^a-z]/i);

            for (let i = 0; i < wordArr.length; i++) {
                if (allowedWord.test(wordArr[i])) {
                    if (obj[wordArr[i]] === undefined)
                        obj[wordArr[i]] = 0;
                    obj[wordArr[i]] += 1;
                }
            }
        }
        return obj;
    }

    reverseString() {
        if (typeof(this.string) === "string") {
            return this.string.split("").reverse().join("");
        }
        return {};
    }

}

module.exports = StrFrequency;