const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'playlist'
});
connection.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

let count = 0;
const handleHome = function(req, res) {
  count++;
  res.json({ count: count });
  // let mailId = JSON.parse(req.body).email;
  // connection.query('select * from singer', (error, results, fields) => {
  // if (error) {
  // } else {
  // }
  // });
};

app.post('/hello', handleHome);
app.listen(8000, () => console.log('server listening on 8000'));
