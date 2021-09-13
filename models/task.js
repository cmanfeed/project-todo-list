const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true },
  status: { type: Number, required: true },
  dateFinal: { type: Date },
  dateCreation: { type: Date, default: Date.now },
});

const Task = mongoose.model("tasks", taskModel);

module.exports = Task;
