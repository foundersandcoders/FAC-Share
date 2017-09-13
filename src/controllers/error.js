const path = require('path');

exports.client = (req, res) => {
  res
    .status(404)
    .render('error', {
      layout: 'main',
      statusCode: 404,
      errorMessage: 'Page not found'
    });
};

exports.server = (req, res) => {
  res
    .status(500)
    .render('error', {
      layout: 'main',
      statusCode: 500,
      errorMessage: 'Internal Server Error'
    });
};
