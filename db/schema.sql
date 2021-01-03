-- Create the `burgers_db`.
DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE  burgers_DB;
-- Switch to or use the `burgers_db`.
USE burgers_DB;
-- Create a `burgers` table with these fields:
-- **id**: an auto incrementing int that serves as the primary key.
-- **burger_name**: a string.
-- **devoured**: a boolean.

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT Null,
burger_name VARCHAR(30),
devoured BOOLEAN,
PRIMARY KEY (id)
);