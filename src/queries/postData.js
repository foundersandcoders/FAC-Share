const dbConnection = require('../database/dbConnection.js');

const ifUrlExists = (url) => {
   return dbConnection.query(`SELECT * FROM resources WHERE url=$1 LIMIT 1`, [url]);
}

const postData = (url, title) => {
  return (dbConnection.query(`INSERT INTO resources (url, title, keywords) VALUES ($1, $2, $3)`, [url, title, keywords]))
}

module.exports = {postData, ifUrlExists};
