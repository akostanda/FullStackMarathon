const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
let engines = require("consolidate");

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");

const moment = require('moment')
let updateSession = moment(new Date()).add(1, 'm').toDate();

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 60000
}));

app.get("/", function (req, res) {
    if (Number(updateSession) <= Number(new Date())) {
        req.session.views = 0;
        updateSession = moment(new Date()).add(1, 'm').toDate();
    }
    req.session.views = (req.session.views || 0) + 1;
    res.render("view", {counter: req.session.views});
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080...");
});

