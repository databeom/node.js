const mongoose = require("mongoose") //mongoose라이브러리를 import
// Define Schemes
const userSchema = new mongoose.Schema({
    username: { type: String},
    email: { type: String,},
    phone: { type: String,},
    password: { type: String,}
  },
  {
    timestamps: true // 기록을 남기거나 업데이트 할때 사용
  });
  
  // Create Model & Export
  module.exports = mongoose.model('User', userSchema);

  