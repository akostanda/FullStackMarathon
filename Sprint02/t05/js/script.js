// let sum = total(1, 0.1);
// console.log(sum);
// sum = total(1, 0.2, sum);
// console.log(sum);
// sum = total(1, 0.98, sum);
// console.log(sum);

function total(addCount, addPrice, currentTotal) {
    return !currentTotal ? (addCount * addPrice).toFixed(2)
        : (addCount * addPrice + Number.parseFloat(currentTotal)).toFixed(2);
}
