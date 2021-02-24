const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: { type: String },
    name: { type: String },
    avatar: { type: String },
    locale: {
      type: String,
      default: "en-GB"
    },
})

mongoose.model('User', userSchema);