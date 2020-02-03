const mysql = require('mysql');
const express = require('express');
const port = 3000;

const app = express();


app.get('/', (req, res) => res.send('dupa'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const mysqlConnection = mysql.createConnection({
//     host: 'foobar',
//     user: 'foobar',
//     password: 'foobar',
//     database: 'foobar'
// });

// mysqlConnection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
