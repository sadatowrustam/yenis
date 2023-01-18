const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const{Projects,Projecttext}=require("../../models")

exports.getAllProjects=catchAsync(async(req,res,next)=>{
    const limit=req.query.limit || 20;
    const offset=req.query.offset || 0
    const projects=await Projects.findAndCountAll({
        order:[["id","DESC"]],
        limit,offset
    })
    const projecttext=await Projecttext.findOne()
    return res.send({projects,projecttext})
})
exports.getOneProject=catchAsync(async(req,res,next)=>{
    const project=await Projects.findOne({where:{project_id:req.params.id}})
    if(!project) return next(new AppError("Project not found",404))
    return res.send(project)
})