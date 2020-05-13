const {formatResponse} = require('./util');
var Request = require('tedious').Request;

function execute(query, connection) {
  return new Promise(resolve => {
    executeQuery(query,connection, (data) => {
      resolve(data);
    })
  }); 
}

var executeQuery = (query, connection, cb) => {
  request = new Request(query, (err, rowCount, rows) => {
    if (err) {
      console.log('error', err);
    } else {
      const formatted = formatResponse(rows);
      connection.close();
      // console.log("Rows: ", formatted);
      cb(formatted);

      
    }
  });
  connection.execSql(request);
}



module.exports = execute;