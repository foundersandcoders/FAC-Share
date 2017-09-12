// const getData = require('../queries/getData.js');
//
// module.exports = (req, res) => {
//   getData()
//     .then(results => {
//       let output = JSON.stringify(results.rows);
//       res.writeHead(200, {
//         'content-type': 'application/json'
//       });
//       res.end(output);
//     })
//     .catch(err => {
//       console.log('Error with getData in router');
//     })
// }
