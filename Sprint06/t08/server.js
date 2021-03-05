const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const engines = require('consolidate');

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");


app.get("/", urlencodedParser, function (req, res) {
    res.render("index");
});

app.post("/", urlencodedParser, (req,
                                                                res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    if (req.body["name"] === "" && req.body["email"] === "" && req.body["age"] === ""
        && req.body["description"] === "" && req.body["photo"] === "") {
        res.render("index.html", {
            name: "THE FIELD CAN NOT BE EMPTY!",
            email: "THE FIELD CAN NOT BE EMPTY!",
            age: "THE FIELD CAN NOT BE EMPTY!",
            description: "THE FIELD CAN NOT BE EMPTY!",
            photo: "THE FIELD CAN NOT BE EMPTY!",
        });
    }
    else {
        res.render("index.html", {
            name: req.body["name"],
            email: req.body["email"],
            age: req.body["age"],
            description: req.body["description"],
            photo: req.body["photo"]
        });
    }
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080...");
});