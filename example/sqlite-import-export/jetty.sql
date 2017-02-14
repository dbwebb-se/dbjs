--
-- Create my database for my boatclub.
--

--
-- Create/Recreate a database from scratch, by executing:
-- $ sqlite3 db.sqlite < jetty.sql
--

--
-- Check the files:
-- $ file *
-- jetty.sql:    ASCII text
-- db.sqlite:    SQLite 3.x database

--
-- Check its schema and content.
-- $ sqlite3 db.sqlite ".schema"
-- $ sqlite3 -column -header db.sqlite "SELECT * FROM Jetty"
--

--
-- Take a backup of the database schema and content by creating
-- SQL commands, which can be used to recreate the database.
-- Or in plain words, dump the database to SQL.
-- $ sqlite3 db.sqlite ".dump"
--
-- or dump it directly to a file dump.sql.
-- $ sqlite3 db.sqlite ".dump" > dump.sql
--


--
-- Table Jetty
--
DROP TABLE IF EXISTS "Jetty";
CREATE TABLE "Jetty" (
    "jettyPosition" INTEGER PRIMARY KEY  NOT NULL  UNIQUE,
    "boatType" VARCHAR(20) NOT NULL,
    "boatEngine" VARCHAR(20) NOT NULL,
    "boatLength" INTEGER,
    "boatWidth" INTEGER,
    "ownerName" VARCHAR(20)
);



--
-- Insert default values into Jetty.
---
INSERT INTO "Jetty" VALUES
    (1,"Buster XXL","Yamaha 115hk",635,240,"Adam"),
    (2,"Buster M","Yamaha 40hk",460,186,"Berit"),
    (3,"Linder 440","Tohatsu 4hk",431,164,"Ceasar");
