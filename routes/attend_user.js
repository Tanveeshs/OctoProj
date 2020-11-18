const event = require('../models/event')

module.exports = (req,res,next)=>{
    const userId = req.headers['token'];
    if(userId===undefined){
        res.json({message:"Token Error"})
        return next();
    }else {
        event.findOneAndUpdate({_id:req.body.event},{$push:{allowed_attendees:userId}},function (err,cb){
            if(err){
                res.json({message:"ERROR"})
            }else {
                res.json({message:"Success"})
            }
        })
    }
}