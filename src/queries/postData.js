const ifUrlExists = (url, dbConnection) => {
  return dbConnection.query(`SELECT * FROM resources WHERE url=$1 LIMIT 1`, [url]);
}

const postData = (url, title, keywords, dbConnection) => {
  dbConnection.query(`INSERT INTO resources (url, title, keywords) VALUES ($1, $2, $3) RETURNING ID`, [url, title, keywords]);
  return dbConnection.query(`UPDATE resources SET searchtext = to_tsvector('english', title || ' ' || keywords)`)
}

module.exports = {
  postData,
  ifUrlExists
};
