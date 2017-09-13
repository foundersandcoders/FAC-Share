var test = require('tape');
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
// test('getData', (t) => {
//
// })
//
// test('postData', (t) => {
//
// })
//
// test('searchData', (t) => {
//
// })
//
// test('app.js', (t) => {
//
// })
//
// test('index.js', (t) => {
//
// })

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
