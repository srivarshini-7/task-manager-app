const express = require("express");
const cors = require("cors");

require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Server is running successfully 🚀");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});