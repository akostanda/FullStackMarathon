// const date0= new Date(1993, 11, 1);
// const date1= new Date(1998, 0, -33);
// const date2= new Date('42 03:24:00');

function getFormattedDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    return (day < 10 ? "0" : "") + day + "." + (month < 10 ? "0" : "") + month + "." + date.getFullYear() + " " +
        (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + dayArr[date.getDay()];
}

// console.log(getFormattedDate(date0));
// console.log(getFormattedDate(date1));
// console.log(getFormattedDate(date2));