const mongoose = require('mongoose');
const { Schema } = mongoose;

const FavoriteSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  id: Number,
  type: {
    type: [String],
    enum: ['movie','tvshow']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Favorite', FavoriteSchema);