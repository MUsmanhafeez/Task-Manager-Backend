const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); 
const { connectToDatabase, sequelize } = require("./src/config/database");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();

const taskRoutes = require("./src/modules/task/taskRoute");

const app = express();

const port = process.env.PORT || 3000;

connectToDatabase();

sequelize.sync(); // This creates the tables if they don't exist

app.use(bodyParser.json());

const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/task", taskRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on:${port}`);
});
