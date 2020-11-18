const mongoose = require('mongoose')

const userS = mongoose.Schema({
    name:String,
    email:String
})

module.exports = mongoose.model('user',userS,'user');