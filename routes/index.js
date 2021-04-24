const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const passport = require('passport');

router.get('/', indexCtrl.index);

// login route
router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
    }
));

// callback route - called back/requested after user logs in
router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/recipes',
        failureRedirect: '/'
    }
));

// logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


module.exports = router;