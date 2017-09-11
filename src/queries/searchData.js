const dbConnection = require('../database/dbConnection.js');

const searchData = (searchquery) => {
  console.log("I am in searchData with this query: ", searchquery);
  return dbConnection.query(`SELECT * FROM resources WHERE keywords LIKE '%$1%'`, [searchquery])
}

module.exports = searchData;
