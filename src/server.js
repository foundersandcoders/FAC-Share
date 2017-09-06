const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server is running at 0.0.0.0:${app.get('port')}`);
});
