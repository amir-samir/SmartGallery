//Create Mongoose Schema to save Users in MongoDB
var mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    email: String,
    kidsRoom: Array,
    livingRoom: Array,
    bedRoom: Array
})

module.exports = mongoose.model('UserModel', userModel);