const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
let engines = require("consolidate");

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");


app.get("/", urlencodedParser, function (req, res) {
    res.render("view");
});

app.post("/", urlencodedParser, (req,
                                        res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    if (req.body.forget) {
        res.render("view");
    }
    else {
        res.render("viewForget", {
            name: req.body.name,
            alias: req.body.alias,
            age: req.body.age,
            description: req.body.description,
            photo: req.body.photo,
            experience: req.body.experience ? req.body.experience.length : "",
            level: req.body.level,
            purpose: req.body.purpose
        });
    }

});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080...");
});