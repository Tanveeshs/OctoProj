const event = require('../models/event')

module.exports = (req,res,next)=>{
    event.findOne({_id:req.body.event},function (err,events){
        if(err){
            res.json({message:"ERROR"})
        }else {
            if(events!== undefined){
                res.json({message:"Success",attendees:events.allowed_attendees})
            }else {
                res.json({message:"NO EVENT FOUND"})
            }
        }
    })
}