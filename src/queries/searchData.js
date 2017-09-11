const dbConnection = require('../database/dbConnection.js');

const searchData = (searchquery) => {
  return dbConnection.query(`SELECT * FROM resources WHERE title LIKE ${searchquery} OR WHERE keywords LIKE ${searchquery}`)
}

module.exports = searchData;
