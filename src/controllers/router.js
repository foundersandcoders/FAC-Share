const express = require('express');
const router = express.Router();
const {postData, ifUrlExists} = require('../queries/postData.js');
const getData = require('../queries/getData.js');
const querystring = require('querystring');
const sanitizeUrl = require('./sanitizeUrl');

router.get('/get-resource', (req, response) => {
  getData()
    .then(res => {
        let output = JSON.stringify(res.rows);
        response.writeHead(200, {
          'content-type': 'application/json'
        });
        response.end(output);
      })
      .catch(err => {
        console.log('error with getData in router');
      })
})

router.post('/add-resource', (req, res) => {
  const reqUrl = req.url;
  console.log("querystring parse", querystring.parse(reqUrl));

  const url = querystring.parse(reqUrl)['/add-resource?url'];
  const title = querystring.parse(reqUrl).title;
  const sanitizedUrl = sanitizeUrl(url);

  ifUrlExists(sanitizedUrl)
  .then(response => {
    if (response.rowCount > 0) throw new Error('URL already exists')
    else {
      postData(sanitizedUrl, title)
    }
  })
  .then(console.log('success'))
  .catch(err => {
    console.log("problem with the database: ", err)
  })
});


module.exports = router;
