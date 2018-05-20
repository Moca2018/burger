DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)
  );
  
  
INSERT INTO burgers (burger_name, devoured) VALUES ('whopper',0);
INSERT INTO burgers (burger_name, devoured) VALUES ('McBurger',0);
INSERT INTO burgers (burger_name, devoured) VALUES ('CheapBurger',0);

SELECT * FROM burgers;