const searchData = require('../queries/searchData.js');

module.exports = (req, res) => {
  const searchquery = req.url.split('?input=')[1];
  searchData(searchquery)
    .then(results => {
      let output = results.rows;
      console.log("I'm the search output  ", output);
      res.render('home', {output});
    })

    .catch(err => {
      console.log("error with searchData in router", err);
    })
}
