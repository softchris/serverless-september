var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var fs = require('fs');
const { formatResponse } = require('./util');

const express = require('express');
const app = express();
const port = 3000;

// this must happen first when in local DEV
// require('dotenv').config();

const config = require('./config');


var executeQuery = (query, res, connection) => {
  request = new Request(query, (err, rowCount, rows) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('writing to path', `${__dirname}/response.json`);
      const formatted = formatResponse(rows);
      console.log("Rows: ", formatted);
      res.send(JSON.stringify(formatted));
      
      connection.close();
    }
  });
  connection.execSql(request);
}

app.get('/mentions', (req, res) => {
  var connection = new Connection(config);
  connection.on('connect', function (err) {
    if (err) {
      console.log(err);
    } else {
      executeQuery("SELECT * FROM Mentions;", res, connection);
    }
  });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



