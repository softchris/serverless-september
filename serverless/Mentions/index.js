var Connection = require('tedious').Connection;
const execute = require('./query');
const config = require('./config');

async function get() {
  return new Promise(resolve => {
    var connection = new Connection(config);
    connection.on('connect', async function (err) {
        if (err) {
            console.log(err);
        } else {
            const res = await execute("SELECT * FROM Mentions ORDER BY WhenDate desc;", connection);
            resolve(res);
        }
    });
  });  
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const res = await get();
    context.res = {
        contentType: 'application/json',
        body: res
    }
    
};