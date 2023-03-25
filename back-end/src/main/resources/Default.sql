CREATE TABLE BOOKS
(
    ID              BIGINT PRIMARY KEY AUTO_INCREMENT,
    TITLE           VARCHAR(255) NOT NULL,
    AUTHOR          VARCHAR(255) NOT NULL,
    DESCRIPTION     VARCHAR(255) NOT NULL,
    GENRE           VARCHAR(255) NOT NULL,
    LENGTH          BIGINT       NOT NULL,
    STATUS          VARCHAR      NOT NULL,
    CREATE_DATE     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO BOOKS (TITLE, AUTHOR, DESCRIPTION, GENRE, LENGTH, STATUS, CREATE_DATE)
VALUES ('Pavadinimas1', 'Autorius', 'Apibudinimas', 'Zanras', 12, 'dfgsdfg',  DEFAULT),
       ('Pavadinimas2', 'Autorius', 'Apibudinimas', 'Zanras', 54, 'dfgsdfg',  DEFAULT),
       ('Pavadinimas3', 'Autorius', 'Apibudinimas', 'Zanras', 77, 'dfgsdfg',  DEFAULT),
       ('Pavadinimas4', 'Autorius', 'Apibudinimas', 'Zanras', 32, 'dfgsdfg',  DEFAULT);