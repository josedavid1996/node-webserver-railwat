require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'))



// app.get('/', function (req, res) {
//   res.send('Home page')
// })
app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Jose David',
    titulo: 'Curso de Node'
  })
})
app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Jose David',
    titulo: 'Curso de Node'
  })
})
app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Jose David',
    titulo: 'Curso de Node'
  })
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => console.log(`Aplicacion servida en el pureto ${port}!`))