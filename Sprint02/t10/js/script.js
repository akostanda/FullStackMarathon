// const user = {
//     name: 'Steve',
//     surname: 'Rogers',
//     age: 101,
//     city: 'New York'
// };

let objCopy = copyObj(user);

function copyObj(obj) {
    let copy = {};

    for (let key in obj) {
        copy[key] = obj[key];
    }
    return copy
}

// console.log(user);
// console.log(objCopy);
// user.name = "Bob";
// user.surname = "Martin"
// user.age = 56;
// user.city = "Kyiv";
// console.log(user);
// console.log(objCopy);