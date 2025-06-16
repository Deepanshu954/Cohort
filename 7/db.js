const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  "name" : String,
  "gmail": {type : String, unique : true },
  "pass" : String,
});

const Todo = new Schema({
  "task" : {
    type: String,
    required: true,
  },
  "done" : Boolean,
  "userId" : ObjectId,
});

const userModel = mongoose.model("users", User);
const todoModel = mongoose.model("todos", Todo);

module.exports = {
  userModel : userModel,
  todoModel : todoModel,
}