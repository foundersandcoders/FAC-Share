const sanitizeUrl = require('./sanitizeUrl');

module.exports = (req, res, next) => {
  const url = sanitizeUrl(req.body.url);
  const ifUrlGood = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (ifUrlGood == null) {
    res.render('error', {
      statusCode: 400,
      errorMessage: 'URL is not valid'
    })
    return Promise.reject('URL is not valid')
  }
  next();
}
