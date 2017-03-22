CREATE DATABASE IF NOT EXISTS nodedb;
GRANT ALL ON nodedb.* TO user@localhost IDENTIFIED BY 'pass'; 

USE nodedb;

CREATE TABLE IF NOT EXISTS Moped (
    `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `text` VARCHAR(40)
);

DELETE FROM Moped;

INSERT INTO Moped (`text`)
VALUES
    ("Apollo"), ("Husqvarna"), ("Puch"), ("Zündapp")
;

SELECT * FROM Moped;
