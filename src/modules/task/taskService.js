const Task = require("./taskModel");

const getTasks = async (req, res) => {
  try {
    const data = await Task.findAll();
    res.status(200).json({message: "Task Fetched Successfully",data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTask = async (req, res) => {
  const { task } = req.body;
  try {
    const data = await Task.create({ task });
    res.status(201).json({message: "Task Added Successfully",data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id, task } = req.body; // Destructure id and task from the request body
  try {
    const [updated] = await Task.update({ task }, { where: { id } });
    console.log(`Number of rows updated: ${updated}`);

    if (updated) {
      const data = await Task.findOne({ where: { id } });
      res.status(200).json({message: "Task Updated Successfully",data});

    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Task.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Task deleted" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
