const dbConnection = require('../database/dbConnection.js');

const getKeywords = (searchKeyword) => {
  return dbConnection.query(`SELECT keywords FROM resources WHERE keywords LIKE '%${searchKeyword}%'`)
}

module.exports = getKeywords;
