const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

router.get('/current_user', (req,res) => {
    res.send(req.user);
});

router.get('/logout', (req,res) => {
    req.logout();
    delete req.session;
    console.log('Logged out');
    res.redirect('/');
});

module.exports = router;