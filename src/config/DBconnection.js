const mysql = require('mysql');
const { promisify } = require('util');

 const connection = mysql.createConnection({
    //Host: User: Password: database:

    "host": process.env.DB_HOST,
    "user": process.env.DB_USR,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME
});

connection.connect((err) => {
    if(err) console.log('MYSQL: ERROR_IN_CONNECTION');
        else console.log('MYSQL: CONNECTION_IS_SUCCESSFULLY');
});

connection.query = promisify(connection.query);

module.exports = connection;
