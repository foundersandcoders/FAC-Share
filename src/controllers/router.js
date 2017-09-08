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
});


module.exports = router;
