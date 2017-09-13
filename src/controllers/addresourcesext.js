const querystring = require('querystring');

module.exports = (req, res, next) => {
  const reqUrl = req.url;

  const url = querystring.parse(reqUrl)['/add-resource-ext?url'];
  const title = querystring.parse(reqUrl).title;
  const keywords = querystring.parse(reqUrl).keywords;

  req.body.url = url;
  req.body.title = title;
  req.body.keywords = keywords;

  next();
}
