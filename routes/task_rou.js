const express=require('express');

const taskController=require("../controller/task_con");

const router=express.Router();

router
.post('/', taskController.create)
.get('/', taskController.getAll)
.get('/:id', taskController.get)
.put('/:id', taskController.replace)
.patch('/:id', taskController.update)
.delete('/:id', taskController.delete)


exports.router=router;