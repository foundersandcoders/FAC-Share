const fs = require('fs');

const dbConnection = require('./test_dbConnection.js');

const sql = fs.readFileSync(`${__dirname}/test_dbBuild.sql`).toString();

const runDbBuild = dbConnection.query(sql)
  .then(res => {
    // console.log("Database created with the result:  ", res);
    console.log("Test Database created");
  })
  .catch(err=>{
    console.log(err)
    throw err
  })

module.exports = runDbBuild
