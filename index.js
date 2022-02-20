// Include packages needed for this application
const inquirer = require('inquirer');
const db = require('./db/connections');
const cTable = require('console.table');
const {mainQuestion,updateEmployeeQuestions, departmentQuestions, roleQuestions} = require('./src/questions.js');

function mainMenu(){
    let sql = '';
    inquirer.prompt(mainQuestion)
    .then(mainAnswer => {
        console.log(mainAnswer.mainQ);
                        
    // Update Employee Role
    // Add Role
    
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
                sql = ``;
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

            // Add Department
            case 'Add Department':
                inquirer.prompt(departmentQuestions)
                .then(deptAnswers => {
                    //need to add some validation (not blank, etc)
                    sql = `INSERT INTO department (name) VALUES (?)`;
                    params = deptAnswers.departmentName;
                    db.query(sql, params, (err, rows) => {
                        if (err) {
                        console.log({ error: err.message });
                        return;
                        }
                        console.log(deptAnswers.departmentName + " Added!");
                        return mainMenu();
                    // console.log(deptAnswers);
                   });
                });
                sql = ``;
                break;

            // Add Role
            case 'Add Role':
                inquirer.prompt(roleQuestions)
                .then(roleAnswers => {
                    //need to add some validation (not blank, etc)
                    sql = `SELECT id FROM department d WHERE d.name = ?`
                    // params = [JSON.stringify(roleAnswers.departmentName)];
                    params = [roleAnswers.departmentName];
                    db.query(sql, params, (err1, rows1) => {
                        console.log(rows1[0]); //[ { id: 1 } ] //rows1.id == undefined
                        if (err1) {
                            console.log({ error: err.message });
                            return;
                        }
                        if (rows1[0]){
                            sql = `INSERT INTO role (title, salary, salary_type, department_id) VALUES (?,?,?,?)`;
                            params = [roleAnswers.roleTitle, roleAnswers.salary, roleAnswers.salaryType, rows1[0].id];
                            //console.log(sql);
                            //console.log(params);
                            db.query(sql, params, (err, rows) => {
                                if (err) {
                                console.log({ error: err.message });
                                return;
                                }
                                console.log(roleAnswers.roleTitle + " Added!");
                                return mainMenu();
                            // console.log(deptAnswers);
                           });
    
                        } else {
                            console.log("Department Not Found!");
                            return mainMenu();
                        }
                   });



                });
                sql = ``;
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
