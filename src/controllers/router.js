const express = require('express');
const router = express.Router();

const getresources = require('./getresources');
const search = require('./search');
const addresources = require('./addresources');
const addresourcesext = require('./addresourcesext');

router.get('/get-resource', getresources);
router.get('/search', search);
router.post('/add-resource-ext', addresourcesext, addresources);
router.post('/add-resource', addresources);

module.exports = router;
