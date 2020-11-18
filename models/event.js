const mongoose = require('mongoose')

const eventS = mongoose.Schema({
    title:String,
    description:String,
    image:{
        data:Buffer,
        contentType:String
    },
    location:String,
    allowed_attendees:[mongoose.Schema.ObjectId],
    waitlist:[mongoose.Schema.ObjectId],
    startTime:String,
    endTime:String
})

module.exports = mongoose.model('event',eventS,'event');