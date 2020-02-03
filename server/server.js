const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'foobar',
    user: 'foobar',
    password: 'foobar',
    database: 'foobar'
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
