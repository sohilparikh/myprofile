const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  next();
})

hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
})


app.get('/', (req, res) => {
   // res.send('<h1>hello express</h1>')
   res.render('home.hbs', {
     pageTitle: 'Home Page'
   })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
})

app.listen(port, () => {
  console.log('server is up')
});
