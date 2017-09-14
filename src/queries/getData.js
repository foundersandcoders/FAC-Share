const getData = (dbConnection) => {
  return dbConnection.query(`SELECT * FROM resources`)
}

module.exports = getData;
