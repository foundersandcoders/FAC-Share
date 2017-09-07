const getData = (dbConnection, cb) => {
  dbConnection.query(`SELECT * FROM resources`, (err, res) => {
    if(err) {
      cb(err)
    } else {
      cb(null, res.rows)
    }
  })
}

module.exports = getData;
