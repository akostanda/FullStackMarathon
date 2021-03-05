const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const engines = require("consolidate");
const User = require("./models/User");

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");
app.use(express.static('public'));

app.get("/", urlencodedParser, function (req, res) {
    res.render("./views/loginForm");
});


app.post("/profile", urlencodedParser, (req,
                                 res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }
    let user = new User(req.body.login, req.body.password);
    user.requestLogin(res);
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080...");
});