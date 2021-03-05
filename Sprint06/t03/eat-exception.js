class EatException extends Error {
    constructor() {
        super();
        this.name = "EatException";
        this.message = 'No more junk food, dumpling';
    }
}

module.exports = {EatException};