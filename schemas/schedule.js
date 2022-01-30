const mongoose = require("mongoose")
const { Schema } = mongoose
const scheduleSchema = new Schema({
    
    status: String,
    year: Number,
    semester: String,
    subject: String,
    creater: String,
    date: String,
    time: String,

})
module.exports = mongoose.model('schedule', scheduleSchema)