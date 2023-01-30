const {Mainpage,Images,Statistics}=require("../../models")
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
exports.addOne = catchAsync(async(req, res, next) => {
    const statistic = await Statistics.findOne()
    statistic.update({ day: statistic.day + 1, week: statistic.week + 1, month: statistic.month + 1 })
    return res.status(200).send(statistic)
})
exports.getStatisctics = catchAsync(async(req, res, next) => {
    const statistic = await Statistics.findOne()
    return res.status(200).send(statistic)
})