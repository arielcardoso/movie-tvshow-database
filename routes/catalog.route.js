const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const Mylist = mongoose.model("Mylist");
const Favorite = mongoose.model("Favorite");

router.get('/', requireLogin , async (req, res) => {
  res.send(requireLogin);
});

/*
Favorite Routes
http://localhost:5000/api/catalog/movie/458576/favorite
*/
router.get('/favorite/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const result = await Favorite.find({_user:req.user.id, type:type, id: titleId});
  res.send(result);
});

router.delete('/favorite/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const result = await Favorite.deleteOne({_user:req.user.id, type:type, id:titleId});
  res.send(result);
});

router.post('/favorite/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const { _user } = req.body;

  const favorite = new Favorite({
    _user: _user? _user : req.user.id,
    type,
    id: titleId,
    createdAt: Date.now(),
  });

  try {
    await favorite.save();
  } catch (err) {
    res.status(422).send(err);
  }
});

//Get all favorited items
router.get('/favorite', async (req,res) => {
  const list = await Favorite.find({_user:req.user.id});
  res.send(list);
});

/*
MyList Routes
http://localhost:5000/api/catalog/mylist/movie/458576
*/
router.get('/mylist/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const result = await Mylist.find({_user:req.user.id, type:type, id: titleId});
  res.send(result);
});

router.delete('/mylist/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const result = await Mylist.deleteOne({_user:req.user.id, type:type, id:titleId});
  res.send(result);
});

router.post('/mylist/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  const { title, image, vote_average, release_date } = req.body;
  
  const mylist = new Mylist({
    _user: req.user.id,
    type,
    id: titleId,
    title: title,
    rating: vote_average,
    image: image,
    release_date: release_date,
    createdAt: Date.now(),
  });

  try {
    res.send(await mylist.save());
  } catch (err) {
    res.status(422).send(err);
  }
});

//Get all items added in my list
router.get('/mylist', async (req,res) => {
  const list = await Mylist.find({_user:req.user.id});
  res.send(list);
});

/*
Title Details
http://localhost:5000/api/catalog/movie/458576/
*/
router.get('/:type/:titleId', async (req,res) => {
  const type = req.params.type;
  const titleId = parseInt(req.params.titleId);
  
  try {
  } catch (err) {}

  res.send('<br><br><h1 style="text-align:center;">Nothing here =(<h1>');
});

module.exports = router;