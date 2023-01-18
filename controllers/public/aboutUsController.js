const {Aboutus,Member}=require("../../models")
const catchAsync=require("../../utils/catchAsync")
const AppError=require("../../utils/appError")
exports.getAboutUs = catchAsync(async(req, res, next) => {
    const aboutus = await Aboutus.findAll({
        order: [
            ["id", "ASC"]
        ]
    })
    
    return res.status(200).send(aboutus)
}) 