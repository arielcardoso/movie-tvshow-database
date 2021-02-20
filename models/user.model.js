const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: {
      type: String,
      default: "Username"
    },
    avatar: {
      type: String,
      default: "avatar_1.jpg"
    }
})

mongoose.model('User', userSchema);