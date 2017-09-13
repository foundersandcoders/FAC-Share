const sanitizeUrl = require('./sanitizeUrl');

module.exports = (req, res, next) => {
  const url = sanitizeUrl(req.body.url);
  const title = req.body.title
  if (url.replace(/\s+/g, '').length === 0 || title.replace(/\s+/g, '').length === 0) {
    res.render('error', {statusCode: 400, errorMessage: 'Invalid Input'});
    return Promise.reject('URL or Title cannot be empty');
  }
  next();
}
