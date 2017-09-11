const express = require('express');
const router = express.Router();
const {
  postData,
  ifUrlExists
} = require('../queries/postData.js');
const getData = require('../queries/getData.js');
const searchData = require('../queries/searchData.js');
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

router.get('/search', (req, response) => {

  const searchquery = req.url.split('?')[1];
  searchData(searchquery)
    .then(res => {
      let output = JSON.stringify(res.rows);
      console.log("I am response from searchData: ", res.rows);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(output);
    })
    .catch(err => {
      console.log("error with searchData in router");
    })
});

router.post('/add-resource', (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);

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
      console.log("problem with the database: ", err)

    });
})

module.exports = router;
