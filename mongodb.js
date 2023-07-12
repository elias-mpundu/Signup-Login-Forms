const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/LoginUsers').then(() => {
    console.log("mongo connected")
}).catch(() => {
    console.log("failed to connect")
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String, 
    required: [true, "username is required!"], 
  }, 
  password: {
    type: String, 
    required: [true, "Password is required!"], 
    min: [7, "Too few characters"],
    max: 12
  },
});


const User = mongoose.model('LogInInfo', userSchema)

module.exports=User;