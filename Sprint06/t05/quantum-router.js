function calculateTime() {
    let quantArr = [];
    let oldDate = new Date(1939, 0, 1);
    let nowaDays = new Date();
    let nowInQuant = new Date(((Math.abs(oldDate) + Number(nowaDays)) / 7) + Number(oldDate));

    quantArr.push(nowInQuant.getFullYear() - oldDate.getFullYear());
    quantArr.push(nowInQuant.getMonth() - oldDate.getMonth());
    quantArr.push(nowInQuant.getDay() - oldDate.getDay());

    return quantArr;
}

module.exports.calculateTime = calculateTime;