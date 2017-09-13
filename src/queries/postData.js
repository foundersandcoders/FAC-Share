const dbConnection = require('../database/dbConnection.js');

const ifInputEmpty = (url, title) => {
  if (url.replace(/\s+/g, '').length === 0 || title.replace(/\s+/g, '').length === 0) {
    return true;
  } else {
    return false;
  }
}

const ifUrlExists = (url) => {
  return dbConnection.query(`SELECT * FROM resources WHERE url=$1 LIMIT 1`, [url]);
}

const postData = (url, title, keywords) => {
  return (dbConnection.query(`INSERT INTO resources (url, title, keywords) VALUES ($1, $2, $3)`, [url, title, keywords]))
}

module.exports = {
  postData,
  ifUrlExists,
  ifInputEmpty
};
