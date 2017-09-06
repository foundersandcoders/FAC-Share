const app = require('./app');

app.listen(app.get('port'), () => {
  console.log("Server is running on port ", app.get('port'));
});
