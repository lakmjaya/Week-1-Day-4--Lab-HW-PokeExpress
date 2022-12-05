const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App!');
  });

app.get('/pokemon', function(req, res) {
    res.render('Index');
  });

app.listen(3000, () => {
    console.log('listening');
});