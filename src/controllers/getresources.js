const getData = require('../queries/getData.js');

module.exports = (req, response) => {
  getData()
    .then(res => {
        let output = JSON.stringify(res.rows);
        response.writeHead(200, {
          'content-type': 'application/json'
        });
        response.end(output);
      })
      .catch(err => {
        console.log('error with getData in router');
      })
}
