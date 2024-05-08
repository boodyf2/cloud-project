-- create DataBase  with name Student_info 
CREATE DATABASE IF NOT EXISTS students;

-- Use DataBase 
USE students;

-- create table with name Student & with 4 attributes 
CREATE TABLE IF NOT EXISTS students_info
  (
     first_name VARCHAR(255) NOT NULL,
     last_name  VARCHAR(255) NOT NULL,
     id         INT PRIMARY KEY,
     age        INT NOT NULL,
     cgpa       NUMERIC(3, 2) NOT NULL,
     position   VARCHAR(255),
     role       VARCHAR(255),
     image_path VARCHAR(255)
  );

-- Insert information in table 
INSERT INTO students_info
VALUES      ('Mohamed',
             'Atef',
             22010224,
             20,
             3.79,
             'Team Member',
             'Database Administrator, created the database using MySQL.',
             './assets/mohamed.jpg'),
            ('Mazen',
             'Hassan',
             22010200,
             19,
             3.89,
             'Team Member',
'Frontend developer, made a webpage using Html, CSS, Javascript, and Axios to make Http requests to the API and Webpack to ensure compatibility with older browsers.'
             ,
'./assets/mazen.jpg'),
            ('Abdalrahman',
             'Mahmoud',
             22010134,
             21,
             3.73,
             'Team Leader',
'Backend Developer, made a web server using NodeJs, the Express framework, and the mysql2 npm package to connect to the database server.'
             ,
'./assets/abdalrahman.jpg'),
            ('Maya',
             'Mahmoud',
             22010204,
             20,
             3.9,
             'Team Member',
'DevOps containerized the web app using Docker and Docker Compose, ensuring the two containers were communicating properly.'
             ,
'./assets/maya.jpg');

SELECT *
FROM   students_info; 