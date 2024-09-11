## WEB-DEV:

### Create the employees table:

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    dept_id INT NOT NULL
);

### Insert dummy data into employees table:

INSERT INTO employees (emp_name, salary, dept_id) VALUES
('Alice Johnson', 60000.00, 1),
('Bob Smith', 55000.00, 2),
('Charlie Brown', 70000.00, 1),
('Diana Lee', 65000.00, 3),
('Eve Wang', 58000.00, 2);

### Create departments table for joining example:

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

### Insert dummy data into departments table:

INSERT INTO departments (dept_id, dept_name) VALUES
(1, 'Engineering'),
(2, 'Marketing'),
(3, 'Finance');

### Tasks:
1. Write a SQL query to insert a new department into the departments table only if the department with dept_id = 4 does not already exist.
2. Write a SQL query to retrieve the total salary expenses for each department from the employees table, joined with the departments table.
3. Update the salary of all employees in the employees table who belong to the 'Engineering' department by increasing their salary by 5%.
4. Write a SQL statement to delete the employees table from the database.
5. Write a SQL statement to drop the ACM21DOC database.