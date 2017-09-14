const {
  postData,
  ifUrlExists
} = require('../queries/postData.js');
const sanitizeUrl = require('./sanitizeUrl');
const error = require('./error');
const dbConnection = require('../database/dbConnection.js');

module.exports = (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);
  ifUrlExists(sanitizedUrl, dbConnection)
    .then(response => {
      if (response.rowCount > 0) {
        const error = JSON.stringify({ message: 'URL already exists' });
        res.end(error);
        return Promise.reject('URL already exists')
      } else {
        const success = JSON.stringify({ message: 'URL added successfully!' });
        res.end(success);
        return Promise.resolve(postData(sanitizedUrl, req.body.title, req.body.keywords, dbConnection))
      }
    })
    .catch(err => {
      console.log("Problem with the database: ", err);
    })
}
