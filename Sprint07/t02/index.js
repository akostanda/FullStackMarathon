const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser")
let engines = require("consolidate");
let passwordToSave;

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");

app.use(cookieParser());

app.get("/", urlencodedParser, function (req, res) {
    if (req.cookies.hash) {
        res.render("hashView", {
            hashPassword: req.cookies.hash
        });
    }
    else {
        res.render("view");
    }
});

app.post("/", urlencodedParser, (req,
                                 res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    let passwordFromUser = req.body.savePassword;
    let salt = bcrypt.genSaltSync(Number(req.body.salt));
    passwordToSave = bcrypt.hashSync(passwordFromUser, salt);

    res.render("hashView", {
        hashPassword: passwordToSave
    });
    res.setHeader("Set-Cookie", `hash=${passwordToSave}`)

});

app.post("/check", urlencodedParser, (req,
                                 res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    let passwordFromUser = req.body.passwordToCheck;

    if (bcrypt.compareSync(passwordFromUser, passwordToSave)) {
        res.render("view", {
            answer: "Hacked!"
        });
    }
    else {
        res.render("hashView", {
            answer: "Access denied!",
            hashPassword: passwordToSave
        });
    }
});

app.post("/clear", urlencodedParser, (req,
                                      res) => {
    res.render("view");
    res.clearCookie("hash");
});

app.listen(process.env.PORT || 8081, () => {
    console.log("Server listening on port 8080...");
});