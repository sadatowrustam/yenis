const sharp=require("sharp")
const fs=require("fs")
const {Aboutus,Member}=require("../../models")
const catchAsync=require("../../utils/catchAsync")
const AppError=require("../../utils/appError")
exports.editAboutUs = catchAsync(async(req, res, next) => {
    const first=req.body[0]
    const second=req.body[1]
    const one = await Aboutus.findOne({ where: { id: 1 } })
    await one.update(first)
    const two = await Aboutus.findOne({ where: { id: 2 } })
    await two.update(second)
    return res.status(200).send({ one, two })
})
exports.uploadAboutUsImage=catchAsync(async(req,res,next)=>{
    const id=req.params.id
    const one=await Aboutus.findOne({ where: {id}})
    const image = `${one.id}_about.webp`;
    req.files = Object.values(req.files)
    const photo = req.files[0].data
    let buffer = await sharp(photo).webp().toBuffer()
    await sharp(buffer).toFile(`static/${image}`);
    await one.update({
        image,
    });
    res.send(one)
})