// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// ***Questions are split into sections so that some sections can be recursive
// Create an array of questions for user input

const mainQuestion = [
    // Select: what would you like to do? (Use arrow keys)
    // View All Employees
    // Update Employee Role
    // View All Roles
    // Add Role
    // View All Departments
    // Add Department
    // (Move up and down to reveal more choices)
    {
        type: 'list',
        name: 'mainQ',
        message: 'What would you like to do? (required)',
        choices: [ "View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Exit"]
    }
        
];
        
//employee
const employeeQuestions = [
    {
    type: 'input',
    name: 'firstName',
    message: "What is the employee's first name?"
    },
    {
    type: 'input',
    name: 'lastName',
    message: "What is the employee's last name?"
    },
    {
    type: 'input',
    name: 'empRole',
    message: "What is the employee's role?"
    },
    {
    type: 'input',
    name: 'empManager',
    message: "Who is the employee's Manager?"
    }
];

//department
const departmentQuestions = [
    {
    type: 'input',
    name: 'departmentName',
    message: "What is the department's name?"
    }
];

//role
//It would be cool to figure out how to automate this and make it a select list for departments
const roleQuestions = [
    {
        type: 'input',
        name: 'roleTitle',
        message: "What is the role's title?"
    },
    {
        type: 'input',
        name: 'departmentName',
        message: "What is the role's department?"
    },             
    {
        type: 'input',
        name: 'salary',
        message: "What is the role's salary?"
    },
    {
        type: 'list',
        name: 'salaryType',
        message: "What is the role's salary type?",
        choices: ['salary', 'hourly'],
    //   filter(val) {
    //     return val.toLowerCase();
    //     }
    }   

];

            
exports.mainQuestion = mainQuestion ;   
exports.employeeQuestions = employeeQuestions ;     
exports.departmentQuestions = departmentQuestions ; 
exports.roleQuestions = roleQuestions ;  
