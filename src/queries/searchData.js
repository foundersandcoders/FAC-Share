const dbConnection = require('../database/dbConnection.js');

const searchData = (searchquery) => {

  // remove spaces
  searchquery = searchquery.split('+').join(' ');

  // add | for sql
  searchquery = searchquery.split(' ').join(' | ');

  const sqlQuery = `select title, url, keywords, ts_rank(searchtext, to_tsquery($1)) AS rank FROM resources WHERE ts_rank(searchtext, to_tsquery($1)) > 0 ORDER BY rank desc`;

  return dbConnection.query(sqlQuery, [searchquery]);
}

module.exports = searchData;
