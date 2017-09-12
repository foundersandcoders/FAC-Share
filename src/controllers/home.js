const getData = require('../queries/getData.js');

module.exports = (req, res) => {
  getData()
    .then(results => {
      // console.log('results: ', results.rows);
      const output = results.rows;
      // console.log('output: ', output);
      res.render('home', {output})
    })
    .catch(err => {
      console.log('Error with getData in router');
    })
}
