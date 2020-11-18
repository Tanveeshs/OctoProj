const event = require('../models/event')

module.exports = (req,res,next)=>{
    event.deleteOne({_id:req.body.id},function (err){
        if(err){
            res.json({message:"ERROR"})
        }else {
            res.json({message:"Success"})
        }
    })

}