## FAC SHARE

A resource sharing and discovery platform for FACers

## WHY

1. There are plenty of resources on the web, and it’s hard to find out whether a resource is worth spending time on it or not
2. It would be very helpful to see resources, recommended by other FACers
3. Currently useful links are shared in Gitter, but for the majority of FACers they are just lost there forever
4. Learning process would be easier, if all the resources would be stored in one place and easily accessible


## WHAT 

* Knowledge sharing platform, that enables FACers to create and populate their knowledge base helpful to all FACers, platform that offers high-quality resources recommended by people we trust.
* The idea is that users will be able to search for information they need, easily share resources that they find useful, rate them, leave comments, leave their likes and dislikes, and see how old are the resources and who added them.

*The results of the first user testing helped us to define the MVP for the app:*
    *1. Adding resources easily and quickly.*
   *2. Searching for resources on the website.*
    *3. The main device we should focus on first is desktop.*

## HOW

1. **Adding resources:** via Google Chrome Extension or directly from the website
2. **Searching:** PostgreSQL full-text search by titles and keywords/tags


## PROTOTYPES

* Mobile website: https://www.figma.com/file/cnOk6NDLJuNP5emHBoz5CTSG/FAC-Share
* Desktop website: https://www.figma.com/file/AJCiubybYrprMRhaatCoV3/FAC-Share-Desktop
* Google Chrome extension: https://www.figma.com/file/7tTeoiJtaNjEwfk03Nfolt/FAC-Share-Extension


## BUILD

**1. Google Chrome Extension**

**2. Search**

Example from our code:

dbBuild.sql:
```
BEGIN;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  keywords TEXT,
  searchtext TSVECTOR
);

UPDATE resources SET searchtext = to_tsvector('english', title || ' ' || keywords);

COMMIT;
```
Search function

```
const searchData = (searchquery, dbConnection) => {

  // remove spaces
  searchquery = searchquery.split('+').join(' ');

  // add | for sql
  searchquery = searchquery.split(' ').join(' | ');

  const sqlQuery = `select title, url, keywords, ts_rank(searchtext, to_tsquery($1)) AS rank FROM resources WHERE ts_rank(searchtext, to_tsquery($1)) > 0 ORDER BY rank desc`;

  return dbConnection.query(sqlQuery, [searchquery]);
}

module.exports = searchData;
```
* [Useful link about full-text search with PostgreSQL](http://rachbelaid.com/postgres-full-text-search-is-good-enough/)

**3. Promises**


Example from our code on using Promise.reject/Promise.resolve:

```
module.exports = (req, res) => {
  const sanitizedUrl = sanitizeUrl(req.body.url);
  ifUrlExists(sanitizedUrl, dbConnection)
    .then(response => {
      if (response.rowCount > 0) {
        res.render('error', {
          statusCode: 400,
          errorMessage: 'URL already exists'
        });
        return Promise.reject('URL already exists')
      } else {
        return Promise.resolve(postData(sanitizedUrl, req.body.title, req.body.keywords, dbConnection))
      }
    })
    .then(() => {
      console.log('success');
      res.redirect('/');
    })
    .catch(err => {
      console.log("Problem with the database: ", err);
    })
}
```
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* [JavaScript Promises - reject vs. throw](https://stackoverflow.com/questions/33445415/javascript-promises-reject-vs-throw)

**4. Tests**

Using redtape to restart the database before and after each test:

```
var redtape = require('redtape');

var test = redtape({
  beforeEach: function (cb) {
    const dbtest = require('./database/test_dbBuild.js')
    dbtest
      .then(()=>cb())
      .catch(cb)
  },
  afterEach: function (cb) {
    const dbtest = require('./database/test_dbBuild.js')
    dbtest
      .then(()=>cb())
      .catch(cb)
  }
});
```
Using promises in tests:

```
const getData = require('../src/queries/getData.js');

test('getData', (t) => {
  getData(test_dbConnection)
    .then(raw=>{
      t.equals(raw.rows.length, 4, 'Expect 4 results')
      const firstResult = raw.rows[0]
      t.equals(firstResult.title, 'Callback HELL', 'Title of the first result should be Callback Hell')
      t.equals(firstResult.url, 'callbackhell.com', 'Url of the first result should be Callback Hell website')
      t.end()
    })
    .catch(err=>{console.log(err); t.fail(err)})
})
```
* [Redtape](https://www.npmjs.com/package/redtape)
