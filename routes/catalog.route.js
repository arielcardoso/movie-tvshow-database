const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const express = require('express');

const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');

router.get('/', requireLogin , async (req, res) => {
  res.send(requireLogin);
});

module.exports = router;