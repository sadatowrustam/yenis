const catchAsync = require('../../utils/catchAsync');
const { Service,Servicetext } = require('../../models');

exports.getAllServices=catchAsync(async(req,res,next)=>{
    const service=await Service.findAll({
        order:[[
            "id","DESC"
        ]]
    })
    const servicetext=await Servicetext.findOne()
    return res.send({service,servicetext})
})