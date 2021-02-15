numbers();

function numbers() {
    let begin = +prompt("Input a number for the beginning of a range", 1);
    let end = +prompt("Input a number for the end of a range", 100);

    if (begin && end && begin < end) {
        checkDivision(begin, end);
        return;
    }
    checkDivision(1, 100);
}

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let str = " -";

        if (i % 2 === 0)
            str = " is even";
        if (i % 3 === 0 && i % 2 !== 0)
            str = " a multiple of 3";
        else if (i % 3 === 0)
            str = str.concat(", a multiple of 3");
        if (i % 10 === 0)
            str = str.concat(", a multiple of 10");
        console.log(i + str + "\n");
    }
}