const express = require('express');
const app = express();

const normal = require('./normal-router')
const quantum = require('./quantum-router')

const PORT = 8080;

const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}...`);
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res, next) => {
    res.render("index-html");
});

app.get("/normal", (req, res, next) => {
    res.render("normal-html",
        {
            year: time.years(),
            month: time.months(),
            day: time.days()
        });
});

app.get("/quantum", (req, res, next) => {
    res.render("quantum-html",
        {
            quantYear : quantumTime[0],
            quantMonth : quantumTime[1],
            quantDay: quantumTime[2]
        });
});