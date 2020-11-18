const event = require('../models/event')
const fs = require('fs')
const moment = require('moment')

module.exports = (req,res,next)=>{
    const e = new event({
        title:req.body.title,
        description:req.body.description,
        image:{
            data:fs.readFileSync(req.file.path),
            contentType:'image/jpeg'
        },
        location:req.body.location,
        startTime:moment(req.body.startTime).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        endTime:moment(req.body.endTime).format("YYYY-MM-DDTHH:mm:ss.SSS")
    })
    e.save(err=>{
        if(err){
            res.json({message:"Sorry There is some error"})
        }else {
            res.json({message:"Done"})
        }
    })
}