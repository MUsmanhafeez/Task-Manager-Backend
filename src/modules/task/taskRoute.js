const express = require("express");
const { getTasks, addTask, updateTask, deleteTask } = require("./taskController");

const router = express.Router();

router.get("/get", getTasks);
router.post("/add", addTask);
router.put("/update", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
