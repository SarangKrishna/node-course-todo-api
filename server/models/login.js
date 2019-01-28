var mongoose = require('mongoose');
var Login = mongoose.model('Login',{
  username:{
    type:String,
    minlength:5,
    trim:true,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:2
  }
});

module.exports = {Login};
