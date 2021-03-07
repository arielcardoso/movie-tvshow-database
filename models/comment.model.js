const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  id: Number,
  type: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Comment', CommentSchema);
