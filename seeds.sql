INSERT INTO department (dept_name) VALUES ('Management');
INSERT INTO department (dept_name) VALUES ('Sales'); 
INSERT INTO department (dept_name) VALUES ('Accounting');
INSERT INTO department (dept_name) VALUES ('Human Resources'); 

INSERT INTO roles (title, salary, department_id) VALUES ('Manager', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Assitant Manager', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Cold Caller', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Admin', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Leader', 150000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Scott', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dwight', 'Schrute', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jim', 'Halpert', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Toby', 'Flenderson', 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'Malone', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Andy', 'Bernard', 3, 1);