// const router = (req, res) => {
//   console.log("req method: ", req.method);
//   console.log("req url: ", req.url);
// }
//
// module.exports = router;

const express = require('express');
const router = express.Router();
const postData = require('./queries/postData.js');
const getData = require('./queries/getData.js');
const querystring = require('querystring');
const dbConnection = require('./database/dbConnection.js');


router.post('/add-resource', (req, res) => {
  const reqUrl = req.url;
  console.log("querystring parse", querystring.parse(reqUrl));

  const url = querystring.parse(reqUrl)['/add-resource?url'];
  const title = querystring.parse(reqUrl).title;

  console.log("url: " + url);
  console.log("title: " + title);

  postData(url, title, dbConnection, (err, res) => {
    if (err) {
      console.log('error');
    } else {
      console.log('success');
    }
  })

  // let body = '';
  //
  // req.on('data', (chunk) => {
  //   body += chunk;
  // })
  //
  // req.on('end', () => {
  //   console.log("body: ", body);
  // })

  // console.log('add resource hello!');
});

router.get('/get-resource', (req, response) => {
  getData(dbConnection, (err, res) => {
    if (err) {
      console.log('error with getData in router')
    } else {
      console.log('success with getData in router')
      let output = JSON.stringify(res);
      console.log("i am output ", output);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(output);
    }
  })
})

module.exports = router;
