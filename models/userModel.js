const validator = require("validator");
const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us your name1"],
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    validate:{
      // This only work on save
      validator:function(el){
        return el === this.password;
      }
    }
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
