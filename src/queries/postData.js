const ifUrlExists = (url, dbConnection, cb) => {
  dbConnection.query(`SELECT COUNT (*) FROM resources WHERE url='${url}'`, (err, res) => {
    if (err) {
      console.log("Problem with the database")
      cb(false)
    }
    else {
      console.log(res.rows)
      console.log(JSON.stringify(res.rows).includes("0"))
      if (JSON.stringify(res.rows).includes("0")) {
        cb(false);
      } else {
        cb(true);
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
