const mongoose = require("mongoose")
const { Schema } = mongoose
const subjectSchema = new Schema({
    //subjectID: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    subjectCode: String,
    subjectName: String,
    credit: Number,
    section: Number,
    capacity: Number,
    lecturer: String,
    major: String,
    classroom: String,

})
module.exports = mongoose.model('subject', subjectSchema)