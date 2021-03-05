const mysql = require("mysql2"),
    readConfig = require("read-config"),
    config = readConfig("./config.json");

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

function queryInsert(user, response) {
    const sql = "INSERT INTO users(login, password, full_name, email_address) VALUES(?, ?, ?, ?)";

    connection.query(sql, user, function (err, results) {
        if (err) {
            response.render("./views/view", {
                passErr: "User or email already exists!"
            });
            console.log("error: User or email already exists!");
        }
        else {
            response.render("./views/view", {
                passErr: "User was added!"
            });
            console.log("User was added!");
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
// module.exports = connection;
module.exports.forConnection = forConnection;
module.exports.queryInsert = queryInsert;
module.exports.forEnd = forEnd;