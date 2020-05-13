// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.USER_NAME, // update me
      password: process.env.PASSWORD // update me
    },
    type: 'default'
  },
  server: process.env.SERVER, // update me
  options: {
    database: process.env.DATABASE, //update me
    encrypt: true,
    rowCollectionOnRequestCompletion: true
  }
}

module.exports = config;