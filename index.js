const express = require("express");
const cors = require("cors");
const database = require("./utils/db");
const app = express();
const users = require("./router/user.router");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

// Database
database();

// Router
app.use("/api/v1/users", users);

// server running
app.get("/", async (req, res) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log("Server is running on port" + port);
});
