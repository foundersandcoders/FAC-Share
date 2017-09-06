const postData = (url, title, dbConnection, cb) => {
  dbConnection.query(`INSERT INTO resources (url, title) VALUES ($1, $2)`, [url, title], (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows);
    }
  })


  // console.log('inside postData');
  // console.log('request: ', req.url);
  // console.log('response :', req.method);
}
module.exports = postData;
