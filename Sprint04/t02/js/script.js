"use strict"

let tableHeader = ["Name", "Strength", "Age"];
let heroesArr = [
    {name: "Thanos", strength: 99, age: 1000},
    {name: "Yon-Rogg", strength: 73, age: 52},
    {name: "Black Panther", strength: 66, age: 53},
    {name: "Spider-Man", strength: 78, age: 16},
    {name: "Captain Marvel", strength: 97, age: 26},
    {name: "Hulk", strength: 80, age: 49},
    {name: "Iron Man", strength: 88, age: 48},
    {name: "Captain America", strength: 79, age: 137},
    {name: "Thor", strength: 95, age: 1000}
]
let notfNameString = "Sorting by Name, order: ";
let notfStrengthString = "Sorting by Strength, order: ";
let notfAgeString = "Sorting by Age, order: ";
let nameSort = false;
let strengthSort = false;
let ageSort = false;

tableCreate();

function tableCreate() {
    let tableDiv = document.getElementById("placeholder");
    tableDiv.innerHTML = "";
    let table = document.createElement("table");

    tableDiv.appendChild(table);
    for (let i = 0; i < 9; i++) {
        if (i === 0) {
            let tr2 = document.createElement("tr");
            table.appendChild(tr2);
            makeColumn (tr2, 3, tableHeader,"th");
        }
        let tr = document.createElement("tr");
        table.appendChild(tr);
        makeColumn (tr, 3, heroesArr[i],"td");
    }
}

function makeColumn (row, amount, arr, flag) {
    if (flag === "th") {
        for (let i = 0; i < amount; i++) {
            let th = document.createElement("th");
            row.appendChild(th);
            th.appendChild(document.createTextNode(arr[i]));
            th.setAttribute("onclick", arr[i] + "()");
        }
    }
    else {
        for (let i = 0; i < amount; i++) {
            let td = document.createElement("td");
            row.appendChild(td);
            console.log(arr.name);
            td.appendChild(document.createTextNode((i === 0) ? arr.name : (i === 1) ? arr.strength : arr.age));
        }
    }
}

function Name() {
    if (nameSort) {
        heroesArr.sort((a, b) => a.name < b.name ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfNameString + "DESC";
        nameSort = false;
    }
    else {
        heroesArr.sort((a, b) => a.name > b.name ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfNameString + "ASC";
        nameSort = true;
    }
    tableCreate()
}

function Strength() {
    if (strengthSort) {
        heroesArr.sort((a, b) => a.strength < b.strength ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfStrengthString + "DESC";
        strengthSort = false;
    }
    else {
        heroesArr.sort((a, b) => a.strength > b.strength ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfStrengthString + "ASC";
        strengthSort = true;
    }
    tableCreate()
}

function Age() {
    if (ageSort) {
        heroesArr.sort((a, b) => a.age < b.age ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfAgeString + "DESC";
        ageSort = false;
    }
    else {
        heroesArr.sort((a, b) => a.age > b.age ? 1 : -1);
        let notDiv = document.getElementById("notification").innerText = notfAgeString + "ASC";
        ageSort = true;
    }
    tableCreate()
}