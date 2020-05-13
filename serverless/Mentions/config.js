// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.USER_NAME,
      password: process.env.PASSWORD 
    },
    type: 'default'
  },
  server: process.env.SERVER, 
  options: {
    database: process.env.DATABASE, 
    encrypt: true,
    rowCollectionOnRequestCompletion: true
  }
}

module.exports = config;