const event = require('../models/event')

module.exports = (req,res,next)=>{
    event.find({startTime:{$gte:moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS")}},function (err,events){
        if(err){
            res.json({message:"ERROR"})
        }else {
            res.json({message:"Success",events:events})
        }
    })

}