const {Mainpage,Images}=require("../../models")
const catchAsync=require("../../utils/catchAsync")
const {v4}=require("uuid")
const sharp=require("sharp")
exports.editMainpage=catchAsync(async(req,res,next)=>{
    const mainpage=await Mainpage.findOne()
    await mainpage.update(req.body)
    return res.status(200).send(mainpage)
})
exports.uploadImages=catchAsync(async(req,res,next)=>{
    const news = await Mainpage.findOne();
    let imagesArray = []
    req.files = Object.values(req.files)
    req.files = intoArray(req.files)
    if (!news)
        return next(new AppError('News did not found with that ID', 404));
    for (const images of req.files) {
        const image_id = v4()
        const image = `${image_id}_main.webp`;
        const photo = images.data
        let buffer = await sharp(photo).webp({lossless:true}).resize({width:400,height:500}).toBuffer()
        await sharp(buffer).toFile(`static/${image}`);
        // await Images.destroy({where:{newsId:news.id}})
        let newImage = await Images.create({ image, image_id, mainId:1 })
        imagesArray.push(newImage)
    }
    return res.status(201).send(imagesArray);
})
const intoArray = (file) => {
    if (file[0].length == undefined) return file
    else return file[0]
}