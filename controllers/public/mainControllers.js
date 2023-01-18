const {Mainpage,Images}=require("../../models")
const catchAsync=require("../../utils/catchAsync")

exports.getMainpage=catchAsync(async (req, res,next)=>{
    const mainpage=await Mainpage.findOne({
        include:{
            model:Images,
            as:"images"
        },
    })
    return res.send(mainpage)
})