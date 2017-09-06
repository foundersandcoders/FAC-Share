const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const router = require('./router')
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

// app.post('/add-resource', function (req, res) {
//   console.log("inside post");
//   // res.send('POST request to the homepage')
// })


module.exports = app;
