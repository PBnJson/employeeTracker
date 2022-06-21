const connection = require("./connection.js");
const inquirer = require("inquirer");
const {
    viewEmployee,
    viewRoles,
    viewDepts,
    addEmployee,
    addRole,
} = require("./viewEmployee.js");

const promptUser = () => {
    inquirer
        .prompt([{
            name: "choices",
            type: "list",
            message: "Please select an option:",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                // "View All Employees By Department",
                // "View Department Budgets",
                "Update Employee Role",
                // "Update Employee Manager",
                "Add Employee",
                "Add Role",
                "Add Department",
                // "Remove Employee",
                // "Remove Role",
                // "Remove Department",
                "Exit",
            ],
        }, ])
        .then((answers) => {
            const { choices } = answers;

            if (choices === "View All Employees") {
                viewEmployee();
                askagain();
            }

            if (choices === "View All Departments") {
                viewDepts();
                askagain();
            }

            if (choices === "Add Employee") {
                addEmployee();
                // askagain();
            }

            // if (choices === "Remove Employee") {
            //     removeEmployee();
            // }

            if (choices === "Update Employee Role") {
                updateEmployeeRole();
            }

            // if (choices === "Update Employee Manager") {
            //     updateEmployeeManager();
            // }

            if (choices === "View All Roles") {
                viewRoles();
            }

            if (choices === "Add Role") {
                addRole();
            }

            // if (choices === "Remove Role") {
            //     removeRole();
            // }

            if (choices === "Add Department") {
                addDepartment();
            }

            // if (choices === "Remove Department") {
            //     removeDepartment();
            // }

            if (choices === "Exit") {
                connection.end();
            }
        });
};
promptUser();

function askagain() {
    return inquirer
        .prompt([{
            type: "confirm",
            name: "again",
            message: "Would you like to do anything else?",
        }, ])
        .then((data) => {
            if (data.again) {
                promptUser();
            } else {
                return;
            }
        });
}