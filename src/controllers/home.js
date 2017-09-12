const getData = require('../queries/getData.js');

module.exports = (req, res) => {
  getData()
    .then(results => {
      const output = results.rows;
      res.render('home', {output})
    })
    .catch(err => {
      console.log('Error with getData in router');
    })
}
