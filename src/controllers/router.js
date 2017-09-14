const express = require('express');
const router = express.Router();

const home = require('./home');
const search = require('./search');
const addresources = require('./addresources');
const verifyurlext = require('./verifyurlext');
const ifinputempty = require('./ifinputempty');
const urlvalidation = require('./urlvalidation');
const addresourcesext = require('./addresourcesext');
const removeentry = require('./removeentry');
const error = require('./error');

router.get('/', home);
router.get('/search', search);
router.get('/delete/:id', removeentry)
router.post('/add-resource-ext', addresourcesext, ifinputempty, verifyurlext);
router.post('/add-resource', ifinputempty, urlvalidation, addresources);

router.use(error.client);
router.use(error.server);

module.exports = router;
