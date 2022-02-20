// Include packages needed for this application
const inquirer = require('inquirer');
const db = require('./db/connections');
const cTable = require('console.table');
const {mainQuestion,updateEmployeeQuestions} = require('./src/questions.js');

function mainMenu(){
    let sql = '';
    inquirer.prompt(mainQuestion)
    .then(mainAnswer => {
        console.log(mainAnswer.mainQ);
                        
    // Update Employee Role
    // Add Role
    // Add Department
        //{ mainQ: 'exit' }
        switch(mainAnswer.mainQ){
            case 'Exit':
                console.log("Goodbye");
                process.exit();    
                break;

            case 'View All Departments':
                sql = `SELECT * FROM department`;
                db.query(sql, (err, rows) => {
                    if (err) {
                    console.log({ error: err.message });
                    return;
                    }
                    console.table(rows);
                    return mainMenu();
                });
                break;

            // View All Roles
            case 'View All Roles':
                sql = `SELECT * FROM role`;
                db.query(sql, (err, rows) => {
                    if (err) {
                    console.log({ error: err.message });
                    return;
                    }
                    console.table(rows);
                    return mainMenu();
                });
                break;

            // View All Employees
            case 'View All Employees':
                sql = `SELECT e.*, r.title, r.salary, r.salary_type, CONCAT( mgr.first_name, " ", mgr.last_name) AS manager, d.name AS "department"
                        FROM employee e 
                        JOIN role r ON e.role_id = r.id 
                        JOIN employee mgr ON e.manager_id = mgr.id 
                        JOIN department d on r.department_id = d.id`;
                db.query(sql, (err, rows) => {
                    if (err) {
                    console.log({ error: err.message });
                    return;
                    }
                    console.table(rows);
                    return mainMenu();
                });
                break;


               
            // default:
            //     mainMenu();
        }

        // if (mainAnswer.mainQ == 'Exit') {
        //     console.log("Goodbye");
        //     return process.exit();
        // }
        // else {mainMenu()}
    })
    // .then(data => {
    //     return mainMenu();
    // })
    .catch(err => {
        console.log(err);
    });
}
// A function to initialize app
function  init() {
    mainMenu();
}

// Function call to initialize app
init();

// const sql = `SELECT * FROM department`;
//     db.query(sql, (err, rows) => {
//       if (err) {
//         console.log({ error: err.message });
//         return;
//       }
//       console.table(rows);
//     });
