const mysql = require("mysql2"),
    readConfig = require("read-config"),
    config = readConfig("./config.json"),
    bcrypt = require("bcrypt");
let connection;

function forConnection() {
    connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        database: config.database,
        password: config.password
    });

    connection.connect(function (err) {
        if (err) {
            return console.error("Error: " + err.message);
        } else {
            console.log("Connection success!");
        }
    });
}

function querySelect(user, response) {
    const sql = "SELECT login, password, full_name, email_address, user_role FROM users WHERE login=?";

    connection.query(sql, user, function (err, results) {
        if (err) {
            response.render("./views/loginForm.html", {
                passErr: "Some error happened, please try again!"
            });
            console.log("error: Some error happened, please try again.");
        }
        else {
            if (results[0] !== undefined && bcrypt.compareSync(user[1], results[0].password)) {
                response.render("./views/profileForm", {
                    loginAnswer: "You have logged in.",
                    fullName: results[0].full_name,
                    login: results[0].login,
                    status: results[0].user_role,
                    email: results[0].email_address
                });
            }
            else {
                response.render("./views/loginForm", {
                    checkinErr: "Login or password is wrong!"
                });
            }
        }
    });
}

function forEnd() {
    connection.end(function (err) {
        if (err) {
            return console.log("Error: " + err.message);
        }
        console.log("Connection is closed!");
    });
}

module.exports.forConnection = forConnection;
module.exports.querySelect = querySelect;
module.exports.forEnd = forEnd;