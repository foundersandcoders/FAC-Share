const getData = require('../queries/getData.js');
const dbConnection = require('../database/dbConnection.js');

module.exports = (req, res) => {
  getData(dbConnection)
    .then(results => {
      const output = results.rows;
      res.render('home', {output})
    })
    .catch(err => {
      console.log('Error with getData in router');
    })
}
