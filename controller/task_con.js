
const model=require('../model/task_mod');
const Task=model.Task;

////For Create
exports.create=(req,res)=>{
    const task=new Task(req.body);
    task.save().then(()=>{
        res.status(201).json(req.body);
    }).catch((err)=>{
        res.status(201).json(err);
    })
}
////For Read
exports.getAll=async(req, res)=>{
    const tasks=await Task.find();
    res.json(tasks);
}
exports.get=async(req, res)=>{
    const id=req.params.id;
    const task=await Task.findById(id);
    res.json(task);
}
////For Update
exports.replace=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await Task.findOneAndReplace({_id:id}, req.body, {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
exports.update=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await Task.findOneAndUpdate({_id:id}, req.body, {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
////For Delete
exports.delete=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await Task.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}