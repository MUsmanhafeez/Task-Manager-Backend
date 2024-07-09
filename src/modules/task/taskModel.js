const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const Task = sequelize.define("Task", {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;
