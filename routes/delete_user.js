const user = require('../models/user')

module.exports = (req,res,next)=>{
    user.deleteOne({_id:req.body.id},function (err){
        if(err){
            res.json({message:"ERROR"})
        }else {
            res.json({message:"Success"})
        }
    })

}