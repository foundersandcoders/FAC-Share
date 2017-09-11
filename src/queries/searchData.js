const dbConnection = require('../database/dbConnection.js');

const searchData = (searchquery) => {
  console.log("I am in searchData with this query: ", searchquery);
  return dbConnection.query(`SELECT * FROM resources WHERE keywords LIKE '%${searchquery}%'`)
}

  // return dbConnection.query(`SELECT * FROM resources WHERE title LIKE '%${searchquery}%' OR WHERE keywords LIKE '%${searchquery}'`)

module.exports = searchData;
