const postData = (req, res) => {

  console.log('inside postData');
  console.log('request: ', req.url);
  console.log('response :', req.method);
}
module.exports = postData;
