const {remove} = require('../queries/removeData.js');
const error = require('./error');
const dbConnection = require('../database/dbConnection.js');

module.exports = (req, res) => {
  remove(req.params.id, dbConnection)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log("Problem with the database: ", err);
    })
}
