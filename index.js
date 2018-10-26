/**
 * @description
 * Entry file for The Province Man's Web App
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const notesRouter = require('./server/routers/notesRouter');
const aboutRouter = require('./server/routers/aboutRouter');
const mainRouter = require('./server/routers/mainRouter');
const indexRouter = require('./server/routers/indexRouter');
const addRouter = require('./server/routers/addRouter');
const port = 3300;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.use((req, res, next) => {
  req.viewModel = {
    title: 'nUB'
  };
  next();
});

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', mainRouter);
app.use('/index', indexRouter);
app.use('/add', addRouter);
app.use('/about', aboutRouter);
app.use('/api/notes', notesRouter);

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
