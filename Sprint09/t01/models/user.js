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

    requestLogin(res) {
        db.forConnection();
        db.querySelect([this.login, this.password], res);
        db.forEnd();
    }
}