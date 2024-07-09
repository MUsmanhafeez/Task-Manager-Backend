const taskService = require("../task/taskService");

//Get All Task
const getTasks = async (req, res, next) => {
  try {
    const task = await taskService.getTasks(req, res);
  } catch (err) {
    next(err);
  }
};
//Add Task
const addTask = async (req, res, next) => {
  try {
    const task = await taskService.addTask(req, res);
  } catch (err) {
    next(err);
  }
};
//Update Task
const updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(req, res);
  } catch (err) {
    next(err);
  }
};
//Delete Task
const deleteTask = async (req, res, next) => {
  try {
    const task = await taskService.deleteTask(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
