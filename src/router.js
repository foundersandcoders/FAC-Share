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

// router.get('/add-resource', postData);

module.exports = router;
