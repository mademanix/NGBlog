const subdomain = require('express-subdomain');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());
// enable cors
app.use(cors());

const dbConfig = {
    host: 'localhost',
    user: 'set_user_name',
    password: 'set_passowrd',
    port: 'set_port',
    database: 'set_password',
    connectTimeout: 60000
};
// connection to db
const conn = mysql.createConnection(dbConfig);

// fix - when db connection is lost after a few time
setInterval(function () {
    conn.query('SELECT 1');
}, 20000);

conn.connect((err) =>{
    if(err) throw err;
    console.log('---- connected to MySQL server');
});

// *** Code examples below go here! ***

// domain
app.get('/', function(req, res) {
    res.send('Homepage');
});

var router = express.Router();

//api specific routes
router.get('/', function(req, res) {
    console.log('---- probe /');
    res.send('hello there');
});

router.get('/posts', (req, res) => {
    console.log('---- probe /posts');
    let sql = "SELECT * FROM posts";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

router.get('/post/:id',(req, res) => {
    console.log('---- probe /post/:id');
    let sql = "SELECT * FROM posts WHERE slug='" + req.params.id + "'";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length) {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        } else {
            console.log('-------- requesting ' + req.params.id + ' which is not exist in db');
            res.send('there is no posts :C');
        }
    });
});

// create symlink to subdomain
app.use(subdomain('api', router));

// run server app
app.listen(8080, () => {

    console.log('server is running...');
});
