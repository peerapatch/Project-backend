const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    Username: String,
    Password: String,
    Email: String,
    Tel: String,
})


module.exports = mongoose.model('user', userSchema)