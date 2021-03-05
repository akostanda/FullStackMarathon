const mysql = require("mysql2"),
    readConfig = require("read-config"),
    config = readConfig("./config.json");

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

connection.connect(function(err) {
    if (err) {
        return console.error("Error: " + err.message);
    }
    else {
        console.log("Connection success!");
    }
});

connection.end(function(err) {
    if (err) {
        return console.log("Error: " + err.message);
    }
    console.log("Connection is closed!");
});
