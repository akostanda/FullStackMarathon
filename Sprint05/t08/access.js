module.exports = class Access {
    constructor(value) {
        this.mark_LXXXV = value;
    }

    set mark_LXXXV(value) {
        if (value === undefined) {
            this._mark_LXXXV = "undefined";
        }
        else if (value === null) {
            this._mark_LXXXV = "null";
        }
        else {
            this._mark_LXXXV = value;
        }
    }

    get mark_LXXXV() {
        return this._mark_LXXXV;
    }
}