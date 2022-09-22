const mysql = require('mysql');

// create here mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database:'node_mysql_crud_db'
});

dbConn.connect((error)=>{
    if(error) throw error
    console.log('Database connected successfully');
})

module.exports = dbConn