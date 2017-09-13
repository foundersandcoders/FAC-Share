const {
  postData,
  ifUrlExists,
  ifInputEmpty
} = require('../queries/postData.js');
const sanitizeUrl = require('./sanitizeUrl');

module.exports = (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);

  if (ifInputEmpty(sanitizedUrl, req.body.title)) {
    console.log("Field is empty");
    res.redirect('/')
  } else {
    ifUrlExists(sanitizedUrl)
      .then(response => {
        if (response.rowCount > 0) throw new Error('URL already exists')
        else {
          postData(sanitizedUrl, req.body.title, req.body.keywords)
        }
      })
      .then(() => {
        console.log('success');
        res.redirect('/');
      })
      .catch(err => {
        console.log("Problem with the database: ", err);
        res.redirect('/');
      })
  }
}
