--
-- Example
--
DROP TABLE IF EXISTS Exam;
CREATE TABLE Exam
(
    `acronym` CHAR(4) PRIMARY KEY,
    `score` INTEGER
);

INSERT INTO Exam
VALUES
    ("adam", 77),
    ("ubbe", 52),
    ("june", 49),
    ("john", 63),
    ("meta", 97),
    ("siva", 88);

SELECT * FROM Exam;



--
-- Function for grading an exam.
--
DELIMITER //

DROP FUNCTION IF EXISTS Grade //
CREATE FUNCTION Grade(
    score INTEGER
)
RETURNS INTEGER
BEGIN
    RETURN score;
END
//

DELIMITER ;

SELECT
    *,
    Grade(score) AS `Grade`
FROM Exam;



--
-- Function for grading an exam.
--
DELIMITER //

DROP FUNCTION IF EXISTS Grade //
CREATE FUNCTION Grade(
    score INTEGER
)
RETURNS CHAR(1)
BEGIN
    IF score >= 90 THEN
        RETURN "A";
    ELSEIF score >= 80 THEN
        RETURN "B";
    ELSEIF score >= 70 THEN
        RETURN "C";
    ELSEIF score >= 60 THEN
        RETURN "D";
    ELSEIF score >= 55 THEN
        RETURN "E";
    ELSEIF score >= 50 THEN
        RETURN "FX";
    END IF;
    RETURN "F";
END
//

DELIMITER ;

SELECT
    *,
    Grade(score) AS `Grade`
FROM Exam
ORDER BY Grade;


--
-- Function for grading an exam U, 3-5.
--
DELIMITER //

DROP FUNCTION IF EXISTS Grade2 //
CREATE FUNCTION Grade2(
    score INTEGER
)
RETURNS CHAR(1)
BEGIN
    IF score >= 90 THEN
        RETURN "5";
    ELSEIF score >= 70 THEN
        RETURN "4";
    ELSEIF score >= 55 THEN
        RETURN "3";
    END IF;
    RETURN "F";
END
//

DELIMITER ;

SELECT
    *,
    Grade(score) AS `A-F, FX`,
    Grade2(score) AS `U, 3-5`
FROM Exam
ORDER BY score DESC;


SHOW FUNCTION STATUS;
SHOW CREATE FUNCTION Grade;
