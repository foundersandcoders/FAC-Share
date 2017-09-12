const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const router = require('./controllers/router.js');
const exphbs = require('express-handlebars');
const bp = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
)

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bp.urlencoded({extended: true}));
app.use(router);

module.exports = app;
