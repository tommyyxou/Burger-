-- Created the DB "Burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "Burgers" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT PRIMARY KEY,
  burger_name varchar (50) NOT NULL,
  devoured BOOLEAN
);