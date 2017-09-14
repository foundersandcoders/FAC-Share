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

const sanitizeLink = require('../src/controllers/sanitizeUrl.js');
const addresourcesext = require('../src/controllers/addresourcesext.js');
const supertest = require('supertest');
const app = require('../src/app.js');

test('tape is working', (t) => {
  t.equals(1, 1, 'one equals one');
  t.end();
});



test('sanitizeUrl', (t) => {
  t.equals(sanitizeLink('/'), '', 'should remove /');
  t.equals(sanitizeLink('https://'), '', 'should remove https://');
  t.equals(sanitizeLink('http://'), '', 'should remove http://');
  t.equals(sanitizeLink('www.'), '', 'should remove www.');
  t.equals(sanitizeLink('http://www.google.com/'), 'google.com', 'should remove everything')
  t.end();
})


//Abdullah
// test('addresourcesext', (t) => {
//
// })
//
// test('addresources', (t) => {
//
// })
//
// test('error', (t) => {
//
// })
//
// test('home', (t) => {
//
// })
//
// test('search', (t) => {
//
// })
//

//Stefano
// test('ifinputempty', (t) => {
//
// })
//
// test('dbBuild.js', (t) => {
//
// })
//
// test('dbBuild.sql', (t) => {
//
// })
//
// test('dbconnection', (t) => {
//
// })
//

//Alina
const getData = require('../src/queries/getData.js');

test('getData', (t) => {
  getData()
    .then(raw=>{
      // Checking total count
      t.equals(raw.rows.length, 2, 'Expect 2 results')

      // Checking first record
      const firstResult = raw.rows[0]
      t.equals(firstResult.title, 'Callback HELL', 'Title of the first result should be Callback Hell')
      t.equals(firstResult.url, 'http://callbackhell.com/', 'Url of the first result should be Callback Hell website')

      t.end()
    })
    //when test fails there is no way to see that with catch, that's why we specify t.fail to fail the test in case of a problem
    .catch(err=>{console.log(err); t.fail(err)})
})

const { postData } = require('../src/queries/postData.js');

test('postData', (t) => {
  postData('www.penguin.com', 'Penguin', 'special, bird')
    .then(res=>{
      getData()
        .then(raw=>{
          const input = raw.rows[2]
          t.equals(raw.rows.length, 3, 'Expect 1 additional result after insertion')
          t.equals(input.title, 'Penguin', 'Title of the input resource should be Penguin')
          t.equals(input.url, 'www.penguin.com', 'Url of the input resource should be penguin.com')
          t.end()
        })
        .catch(err=>{console.log(err); t.fail(err)})
    })
    .catch(err=>{console.log(err); t.fail(err)})
})

const searchData = require('../src/queries/searchData.js');

test('searchData', (t) => {
  searchData('Async')
    .then(raw=>{
      t.equals(raw.rowCount, 1, 'Expect 1 result from searchData')
      t.end()
    })
    .catch(err=>{console.log(err); t.fail(err)})
})

test('router.js/', (t) => {
  supertest(app)
    .get('/')
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    })
})

test('router.js/search', (t) => {
  supertest(app)
    .get('/search')
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    })
})

test('router.js/add-resource-ext', (t) => {
  supertest(app)
    .get('/add-resource-ext')
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    })
})

test('router.js/add-resource', (t) => {
  supertest(app)
    .get('/add-resource')
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    })
})
