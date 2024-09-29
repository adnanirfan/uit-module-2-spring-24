// API for Todos with CRUD operations with MonodDB model Todo and User

const express = require("express");

const Todo = require("../models/todos");
const User = require("../models/users");

const router = express.Router();

router.post("/todos", async (req, res) => {
  const todo = new Todo({
    ...req.body,
    // user: req.user._id,
  });

  try {
    await todo.save();
    res.status(201).send(todo);
  } catch (e) {
    res.status(400).send({ error: "Error while saving todo to database" });
  }
});

router.get("/todos", async (req, res) => {
  const userId = req.query.user_id;
  if (!userId)
    return res.status(404).send({
      error: "Invalid User",
    });

  try {
    const todos = await Todo.find({ user: userId }, null, { populate: "user" });
    res.send(todos);
  } catch (e) {
    res.status(500).send({
      error: "Error while fetching todos from database",
      message: e.message,
    });
  }
});

router.get("/todos/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const todo = await Todo.findOne({ _id, user: req.user._id });
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send(todo);
  } catch (e) {
    res.status(500).send({ error: "Error while fetching todo from database" });
  }
});

router.put("/todos/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }

    updates.forEach((update) => (todo[update] = req.body[update]));
    await todo.save();

    res.send(todo);
  } catch (e) {
    res.status(400).send({ error: "Error while updating todo" });
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }

    res.send(todo);
  } catch (e) {
    res.status(400).send({ error: "Error while deleting todo" });
  }
});

module.exports = router;
