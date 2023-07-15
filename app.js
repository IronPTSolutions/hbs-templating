const express = require('express');

const app = express();

// Configure rendering views engine
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
  res.render('home', { name: 'Carlos' });
})

app.get('/about', (req, res, next) => {
  res.render('about');
})

const port = 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));