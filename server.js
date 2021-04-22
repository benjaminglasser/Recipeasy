// Load your modules (require() statements)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;
require('./config/database');

// Create our express app
const app = express();

// routers
const indexRouter = require('./routes/index');
const recipesRouter = require('./routes/recipes');
const ingredientsRouter = require('./routes/ingredients');


// Configure application settings app.set()
app.set('view engine', 'ejs');

//  Mount application middleware app.use()
app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false })); 
app.use(methodOverride('_method'));

// Mount our route handlers
app.use('/', indexRouter);
app.use('/recipes', recipesRouter);
app.use('/', ingredientsRouter);


// Tell our app to listen on a port - our app needs to process files
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
  });
