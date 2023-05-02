const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  user_id: {type: String, required: true, unique: true},
  task_assigned: {type: String, required: true},
  start_date: {type: String, required: true},
  end_date: {type: String, required: true},
  extanded_date: String
});

exports.Task = mongoose.model("Task", taskSchema);
