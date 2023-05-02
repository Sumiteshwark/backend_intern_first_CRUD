
require('dotenv').config(); //For this first we have to do (npm i dotnet)
const express=require('express');
const server=express();

const mongoose = require("mongoose");

const taskRouter=require("./routes/task_rou");


//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/task_db');
  console.log("db created");
}

//db Schema
//make in model->product_mod.js


//MIddleWare
server.use(express.json());  ////use of read json file send from body in postman.  Before we use it as bodyParser.
// server.use(express.urlencoded());
server.use(express.static('public'));  ////Make file in static folder and write file index.html to default start.

server.use('/tasks',taskRouter.router);  //every link starts with / (i.e. localhost:8080/tasks/)


server.listen(process.env.PORT, ()=>{
    console.log('server started at ' + process.env.PORT);
});