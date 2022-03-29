const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.locals.pageTitle = 'My application';

app.get('/', (request, response) => {
  response.render('home', {
    message:
      'Welcome to the biggest (and only) fansite dedicated to Snail from Adventure Time'
  });
});

app.get('/about', (request, response) => {
  response.render('about', { message: 'About "Waving Snail"' });
});

app.get('/works', (request, response) => {
  response.render('works', { message: 'Notable work' });
});

app.listen(3000);
