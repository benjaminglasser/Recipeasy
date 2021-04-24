// Load your modules (require() statements)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');


require('dotenv').config();
require('./config/database');
require('./config/passport');

// Create our express app
const app = express();

// routers
const indexRouter = require('./routes/index');
const recipesRouter = require('./routes/recipes');



// Configure application settings app.set()
app.set('view engine', 'ejs');

//  Mount application middleware app.use()
app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false })); 
app.use(methodOverride('_method'));

//session middleware
app.use(session({
  secret: 'SEIRRocks!',
  resave: false,
  saveUninitialized: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Mount our route handlers
app.use('/', indexRouter);
app.use('/recipes', recipesRouter);



// Tell our app to listen on a port - our app needs to process files
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
  });
