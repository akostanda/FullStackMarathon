# DROP DATABASE IF EXISTS ucode_web;

CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER IF NOT EXISTS 'akostanda'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'akostanda'@'localhost';
FLUSH PRIVILEGES;

# DROP TABLE IF EXISTS powers;
# DROP TABLE IF EXISTS races;
# DROP TABLE IF EXISTS teams;
# DROP TABLE IF EXISTS heroes;
# DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
 id INT(11) NOT NULL AUTO_INCREMENT,
 login VARCHAR(30) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 full_name VARCHAR(255) NOT NULL,
 email_address VARCHAR(255) NOT NULL UNIQUE,
 user_role VARCHAR(10) DEFAULT 'user',
 PRIMARY KEY (id)
);

