//require express
const express = require('express');
const pokemon = require('./models/pokemon')
// set express to a variable
const app = express();
//set a variable of port to 3000
const port =3000;
// set view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App!');
  });
  

app.get('/pokemon', function(req, res) {
    res.render('Index',{pokemonList: pokemon});
  });

app.get('/pokemon/:id', function (req,res){
    res.render('Show', {pokemon:[req.params.id]})
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});