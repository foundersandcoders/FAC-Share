const {postData, ifUrlExists} = require('../queries/postData.js');
const sanitizeUrl = require('./sanitizeUrl');
const error = require('./error');

module.exports = (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);
  ifUrlExists(sanitizedUrl)
    .then(response => {
      if (response.rowCount > 0) {
        res.render('error', {
          statusCode: 400,
          errorMessage: 'URL already exists'
        });
        return Promise.reject('URL already exists')
      } else {
        return Promise.resolve(postData(sanitizedUrl, req.body.title, req.body.keywords))
      }
    })
    .then(() => {
      console.log('success');
      res.redirect('/');
    })
    .catch(err => {
      console.log("Problem with the database: ", err);
    })
}
