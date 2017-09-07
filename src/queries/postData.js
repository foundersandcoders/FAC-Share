const ifUrlExists = (url, dbConnection, cb) => {
  dbConnection.query(`SELECT * FROM resources WHERE url='${url}' LIMIT 1`, (err, res) => {
    if (err) {
      console.log("Problem with the database", err)
    }
    else {
      console.log("I am res.rowCount ", res.rowCount)
      if (res.rowCount > 0) {
        cb(true);
      } else {
        cb(false);
      }
    }
  })
}

const postData = (url, title, dbConnection, cb) => {
  ifUrlExists(url, dbConnection, (urlExists) => {
    if (urlExists) {
      return console.log("URL already exists")
    } else {
      dbConnection.query(`INSERT INTO resources (url, title) VALUES ($1, $2)`, [url, title], (err, res) => {
        if (err) {
          cb(err)
        } else {
          cb(null, res.rows)
        }
      })
    }

  })
}

module.exports = postData;
