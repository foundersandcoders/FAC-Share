const express = require('express');
const router = express.Router();
const {postData, ifUrlExists} = require('../queries/postData.js');
const getData = require('../queries/getData.js');
const querystring = require('querystring');
const sanitizeUrl = require('./sanitizeUrl');

const getresources = require('./getresources');
const addresources = require('./addresources');

router.get('/get-resource', getresources);

router.post('/add-resource', addresources);


module.exports = router;
