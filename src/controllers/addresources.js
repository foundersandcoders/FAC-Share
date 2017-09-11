const {postData, ifUrlExists} = require('../queries/postData.js');
const sanitizeUrl = require('./sanitizeUrl');

module.exports = (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);

  ifUrlExists(sanitizedUrl)
  .then(response => {
    if (response.rowCount > 0) throw new Error('URL already exists')
    else {
      postData(sanitizedUrl, req.body.title, req.body.keywords)
    }
  })
  .then( ()=> {
    console.log('success');
    res.redirect('/');
  }
  )
  .catch(err => {
    console.log("problem with the database: ", err)
  })
}
