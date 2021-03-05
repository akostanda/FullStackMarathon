function calculateTime() {
    let oldDate = new Date(1939, 0, 1);
    return oldDate;
}
let nowaDays = new Date();

Date.prototype.years = function() {
    return nowaDays.getFullYear() - this.getFullYear();
}

Date.prototype.months = function() {
    return nowaDays.getMonth() - this.getMonth();
}

Date.prototype.days = function() {
    return nowaDays.getDay() - this.getDay();
}

module.exports.calculateTime = calculateTime;
