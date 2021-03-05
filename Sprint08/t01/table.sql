use ucode_web;

# DROP TABLE IF EXISTS heroes;

CREATE TABLE IF NOT EXISTS heroes (
 id INT(11) NOT NULL AUTO_INCREMENT,
 name TEXT NOT NULL,
 description TEXT NOT NULL,
 race VARCHAR(255) DEFAULT 'human' NOT NULL,
 class_role ENUM ('tankman', 'healer', 'dps') NOT NULL,
 PRIMARY KEY (id), UNIQUE(name(30))
);