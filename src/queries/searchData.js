const dbConnection = require('../database/dbConnection.js');

const searchData = (searchquery) => {
  return dbConnection.query(`SELECT * FROM resources WHERE title LIKE ${searchquery} OR WHERE keywords LIKE ${searchquery}`)
}

const getKeywords = (searchKeyword) => {
  return dbConnection.query(`SELECT keywords FROM resources WHERE keywords LIKE '%${searchKeyword}%'`)
}

module.exports = searchData;
