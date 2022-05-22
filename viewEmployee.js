const Sequelize = require("sequelize");
const connection = require("./connection.js");
const index = require("./index.js");
const table = require("console.table");
const inquirer = require("inquirer");

const Commands = {
    viewEmployee() {
        // the 'fields' argument is the
        connection.query(
            "SELECT * FROM employee",
            function(error, results, fields) {
                console.table(results);
            }
        );
    },
    viewRoles() {
        let db = `SELECT roles.id, roles.title, department.dept_name AS department
                FROM roles
                INNER JOIN department ON roles.department_id = department.id`;
        connection.query(db, function(error, results, fields) {
            console.table(results);
        });
    },
    viewDepts() {
        let db = `SELECT * FROM department`;
        connection.query(db, function(error, results) {
            console.table(results);
        });
    },
    addEmployee() {
        return inquirer
            .prompt([{
                    type: "input",
                    name: "first_name",
                    message: "What is the employee's first name?",
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employee's last name?",
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "Select a role id number.",
                    choices: ["1", "2", "3", "4", "5"],
                },
                {
                    type: "list",
                    name: "manager_id",
                    message: "What is the manager role ID number",
                    choices: ["1", "2", "3", "4"],
                },
            ])
            .then((data) => {
                const db = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
                connection.query(
                    db, [data.first_name, data.last_name, data.role_id, data.manager_id],
                    function(errors, results) {
                        console.log("Employee Has Been Added");
                    }
                );
            });
    },
    addRole() {
        return inquirer
            .prompt([{
                    type: "input",
                    name: "title",
                    message: "What is your title?",
                },
                {
                    type: "input",
                    name: "salary",
                    message: "What is the employee's salary?",
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "What is the employee's dept_id?",
                    choices: ["1", "2", "3", "4", "5"],
                },
            ])
            .then((data) => {
                const db = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
                connection.query(
                    db, [data.title, data.salary, data.department_id],
                    function(errors, results) {
                        console.log("New Role Added");
                    }
                );
            });
    },
    addDepartment() {
        return inquierer
            .prompt([{
                type: "input",
                message: "Do you want to add a department?",
                name: "dept_name",
            }, ])
            .then((data) => {
                const db = `INSERT INTO department (dept_name) VALUES (?)`;
                connection.query(db, [data.dept_name], function(errors, results) {
                    console.log("New Department Added");
                });
            });
    },
};

module.exports = Commands;