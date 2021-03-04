const mongoose = require('mongoose');
const { Schema } = mongoose;

const mylistSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  id: Number,
  type: {
    type: [String],
    enum: ['movie','tvshow']
  },
  title: String,
  rating: Number,
  image: String,
  release_date: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Mylist', mylistSchema);