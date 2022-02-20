const db = require('../db/connections');

const  getDepartmentIDbyName = (deptName) => {
    let myDept = '';
    sql = `SELECT id FROM department d WHERE d.name = ?`
    params = [deptName];
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        if (rows[0]){ myDept = rows1[0].id
        } else {
            //log not found & return to menu
            console.log("Department Not Found!");
            return;
        }
    });
    return myDept;
};

exports.getDepartmentIDbyName = getDepartmentIDbyName;  