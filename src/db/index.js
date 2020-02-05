const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 100,
    password: '',
    user: 'root',
    database: 'mybase',
    host: 'localhost',
    port:'3306'

})


let db = {}

db.all = () => {
    
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM posts`, (err, results) => {
            if (err) {
                return reject(err)
            }

            return resolve(results)
        })
    })
}

db.single = (id) => {
    
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM posts where id = ?`,[id], (err, results) => {
            if (err) {
                return reject(err)
            }

            return resolve(results[0])  // Get the post from returned array
        })
    })
}


/*
---- post body: -----
{
"title":"A new course Course (PYTON)",
"body":"In this video we will go over the basics of Python",
}

*/
db.create = (post) => {
   
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO posts SET ?`, post, (err, results, fields) => {
            if (err) {
                return reject(err)
            }            
            return resolve(results.insertId)  // Id of new post
        })
    })
}

module.exports = db