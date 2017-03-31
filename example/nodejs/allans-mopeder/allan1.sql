--
-- Create and use an own database for this example.
--
-- CREATE DATABASE Allan;
-- USE Allan;



--
-- Allans products that he sells
--
DROP TABLE IF EXISTS a_product1;
CREATE TABLE a_product1 (
    `id` INTEGER PRIMARY KEY,
    `name` VARCHAR(20)
);

INSERT INTO a_product1
    VALUES
        (1, "Husqvarna"), (2, "Zündapp"), (3, "Puch Dakota"), (4, "Vespa");



--
-- Allans inventory, these products he has at home, ready to sell
--
DROP TABLE IF EXISTS a_inventory1;
CREATE TABLE a_inventory1 (
    `id` INTEGER PRIMARY KEY,
    `number` INTEGER
);

INSERT INTO a_inventory1
    VALUES
        (1, 5), (2, 2), (3, 3), (4, 0);



--
-- Allans central inventory, these products exists at the central inventory
-- and can be soled with some delivery time
--
DROP TABLE IF EXISTS a_inventory2;
CREATE TABLE a_inventory2 (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `number` INTEGER
);

INSERT INTO a_inventory2
    VALUES
        (1, 4), (2, 0), (3, 2), (4, 5);
