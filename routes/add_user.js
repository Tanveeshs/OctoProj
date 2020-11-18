const user = require('../models/user')

module.exports = (req,res,next)=>{
    const e = new user({
        name:req.body.name,
        email:req.body.email
    })
    e.save(err=>{
        if(err){
            res.json({message:"Sorry There is some error"})
        }else {
            res.json({message:"Done",id:e._id})
        }
    })
}