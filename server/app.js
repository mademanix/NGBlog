const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
// const config = require('./config.js/index.js')
 
// parse application/json
app.use(bodyParser.json());
app.use(cors());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'ngblog',
  connectTimeout: 10000
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/api/posts', (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single product
app.get('/api/post/:id',(req, res) => {
  let sql = "SELECT * FROM posts WHERE slug='" + req.params.id + "'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});