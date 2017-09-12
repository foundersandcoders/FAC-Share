const express = require('express');
const router = express.Router();

const home = require('./home');
const getresources = require('./getresources');
const search = require('./search');
const addresources = require('./addresources');
const addresourcesext = require('./addresourcesext');
const error = require('./error');

router.get('/', home);
// router.get('/get-resource', getresources);
router.get('/search', search);
router.post('/add-resource-ext', addresourcesext, addresources);
router.post('/add-resource', addresources);

router.use(error.client);
router.use(error.server);

module.exports = router;
