CREATE DATABASE Sender;

USE Sender;

--Users--
CREATE TABLE Users(
    Us_ID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(Us_ID),
    Us_name VARCHAR(80),
    Us_address VARCHAR(30),
    Us_relationship VARCHAR(60)
);
--Mails--

USE Sender;

CREATE TABLE Mails(
    Ml_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Ml_to VARCHAR(80),
    Ml_subject VARCHAR(50),
    Ml_text text,
    Us_ID INT,
    FOREIGN KEY(Us_ID) REFERENCES Users(Us_ID) ON DELETE CASCADE,
    Ml_timeCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Insert data in table Users--

USE Sender;

LOAD DATA LOCAL INFILE "C:/Users/anemicpony/Documents/Projects/Sql/Application/Users.csv"
INTO TABLE Users
FIELDS TERMINATED BY ';'
LINES TERMINATED BY '\n'
(Us_name,Us_Address,Us_relationship);
