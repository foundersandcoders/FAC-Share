const searchData = require('../queries/searchData.js');

module.exports = (req, res) => {
  const searchquery = req.url.split('?')[1];
  searchData(searchquery)
    .then(results => {
      let output = JSON.stringify(results.rows);
      res.writeHead(200, {
        'content-type': 'application/json'
      });
      console.log("im search output  ", output);
      res.end(output);
    })

    .catch(err => {
      console.log("error with searchData in router", err);
    })
}
