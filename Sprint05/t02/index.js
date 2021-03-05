let checkDivision = (start = 1, end = 60) => {
    for (let i = start; i <= end; i++) {
        let info = "The number ";
        if (!(i % 2))
            info = info + i + " is divisible by 2";
        if (!(i % 3))
            info = !(i % 2) ? info + ", is divisible by 3" : info + i + " is divisible by 3";
        if (!(i % 10))
            info = info + ", is divisible by 10";
        if (info === "The number ")
            info = info + i + " -";
        console.log(info);
    }
}

module.exports.checkDivision = checkDivision;