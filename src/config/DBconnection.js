const mysql = require('mysql');
const { promisify } = require('util');

 const connection = mysql.createConnection({
    //Host: User: Password: database:

    "host":"localhost",
    "user":"Mguevara",
    "password":"Crz+$%S14",
    "database":"Sender"
});

connection.connect((err) => {
    if(err) console.log('MYSQL: ERROR_IN_CONNECTION');
        else console.log('MYSQL: CONNECTION_IS_SUCCESSFULLY');
});

connection.query = promisify(connection.query);

module.exports = connection;
