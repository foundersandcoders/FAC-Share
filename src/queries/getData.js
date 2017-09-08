const dbConnection = require('../database/dbConnection.js');

const getData = () => {
  return dbConnection.query(`SELECT * FROM resources`)
}

module.exports = getData;
