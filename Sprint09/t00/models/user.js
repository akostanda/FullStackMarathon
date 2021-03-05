const db = require('../db');
const Model = require('../Model');

module.exports = class User extends Model {
    response;
    constructor(login, password, full_name, email) {
        super();
        this.login = login;
        this.password = password;
        this.full_name = full_name;
        this.email = email;
        this.response = "";
    }

    registration(res) {
        db.forConnection();
        db.queryInsert([this.login, this.password, this.full_name, this.email], res);
        db.forEnd();
    }
}