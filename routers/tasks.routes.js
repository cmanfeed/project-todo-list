const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res) => {
  await Task.find({})
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch(() => {
      res.status(400).send("Server error.");
    });
});

router.get("/:id", async (req, res) => {
  await Task.find({ _id: req.params.id })
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch(() => {
      res.status(404).send("Could not find the specific ID.");
    });
});

router.post("/", async (req, res) => {
  await Task.create(req.body)
    .then(() => {
      res.status(201).send("Task add sucessfully.");
    })
    .catch(() => {
      res.status(400).send("Maybe you're missing some arguments in body.");
    });
});

router.put("/:id", async (req, res) => {
  await Task.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("successfully Updated.");
    })
    .catch(() => {
      res.status(404).send("Could not find the specific ID.");
    });
});

router.delete("/:id", async (req, res) => {
  await Task.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Successfully Deleted.");
    })
    .catch(() => {
      res.status(404).send("Could not find the specific ID.");
    });
});

module.exports = router;
