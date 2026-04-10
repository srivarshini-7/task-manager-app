const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.post("/create", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

router.get("/all", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.delete("/delete/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
});

router.put("/update/:id", async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    res.json(updatedTask);
});

module.exports = router;