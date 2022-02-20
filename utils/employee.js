const db = require('../db/connections');

const  getManagerIDbyName = (mgrName) => {
    return new Promise(function(resolve, reject){
        let myMgr = '';
        let firstName = mgrName.split(' ').slice(0, -1).join(' ');
        let lastName = mgrName.split(' ').slice(-1).join(' ');

        sql = `SELECT id FROM employee e WHERE e.first_name = ? and e.last_name = ?`
        params = [firstName, lastName];

        console.log(sql);
        console.log(params);

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log({ error: err.message });
                return reject(err);
            }
            if (rows[0]){ 
                return resolve(rows[0].id);
            } else {
                //log not found & return to menu
                console.log("Manager Not Found!");
                return reject(err);
            }
        });
    });
}   
//update : select emp and then enter the new role
const  getEmpByName = (fname, lname, empType) => {
    return new Promise(function(resolve, reject){
        let myID = '';

        sql = `SELECT id FROM employee e WHERE e.first_name = ? and e.last_name = ?`
        params = [fname, lname];

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log({ error: err.message });
                return reject(err);
            }
            if (rows[0]){ 
                return resolve(rows[0].id);
            } else {
                //log not found & return to menu
                console.log(empType + " Not Found!");
                return reject(err);
            }
        });
    });
}   

const  updateEmpRole = (empID, roleID) => {
    return new Promise(function(resolve, reject){
        sql = `UPDATE employee SET role_id = ? WHERE id = ?`
        params = [roleID, empID];

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log({ error: err.message });
                return reject(err);
            }
            // console.log(empType + " Updated!");
                return resolve(true);
            
        });
    });
} 

exports.getManagerIDbyName = getManagerIDbyName;  
exports.getEmpByName = getEmpByName;
exports.updateEmpRole = updateEmpRole;