const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const engines = require("consolidate");
const bcrypt = require("bcrypt");
const User = require("./models/User");

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");
app.use(express.static('public'));

app.get("/", urlencodedParser, function (req, res) {
    res.render("./views/view");
});


app.post("/", urlencodedParser, (req,
                                 res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    if (req.body.password !== "" && req.body.password === req.body.conPassword) {
        let passwordFromUser = req.body.password;
        let salt = bcrypt.genSaltSync(Number(req.body.salt));
        let passwordToSave = bcrypt.hashSync(passwordFromUser, salt);
        let user = new User(req.body.login, passwordToSave, req.body.name, req.body.email);

        user.registration(res);
    }
    else {
        console.log("not equals");
        res.render("./views/view", {
            passErr: "Passwords are not the same!"
        });
    }
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080...");
});