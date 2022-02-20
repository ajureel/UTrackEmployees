const db = require('../db/connections');

const  getRoleIDByTitle = (roleTitle) => {
    return new Promise(function(resolve, reject){
        let myRoler = '';
        
        sql = `SELECT id FROM role r WHERE r.title = ?`
        params = [roleTitle];

        // console.log(sql);
        // console.log(params);

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log({ error: err.message });
                return reject(err);
            }
            if (rows[0]){ 
                return resolve(rows[0].id);
            } else {
                //log not found & return to menu
                console.log("Role Not Found!");
                return reject(err);
            }
        });
    });
}   

exports.getRoleIDByTitle = getRoleIDByTitle;  