const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  pool: {
    max: 10,         // Maximum number of connections in pool
    min: 0,          // Minimum number of connections in pool
    acquire: 30000,  // Maximum time (in ms) to acquire a connection
    idle: 10000      // Maximum time (in ms) a connection can be idle before being released
  }
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables (use with caution)
    console.log('Database synchronized.');
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectToDatabase };
