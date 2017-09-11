const express = require('express');
const router = express.Router();
const searchData = require('../queries/searchData.js');

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

const getresources = require('./getresources');
const addresources = require('./addresources');
const addresourcesext = require('./addresourcesext');

router.get('/get-resource', getresources);
router.post('/add-resource-ext', addresourcesext, addresources);
router.post('/add-resource', addresources);


module.exports = router;
