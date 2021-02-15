function checkBrackets(str) {
    let openBr = 0;
    let closeBr = 0;
    let totalBr = 0;

    if (!str)
        return -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(')
            openBr++;
        if (str[i] === ')') {
            closeBr++
            if (openBr < closeBr) {
                totalBr += closeBr - openBr;
                openBr = closeBr;
            }
        }
    }
    if (openBr === 0 && closeBr === 0)
        return -1;
    if (openBr > closeBr)
        totalBr += openBr - closeBr;
    return totalBr;
}