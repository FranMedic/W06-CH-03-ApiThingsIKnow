const chalk = require("chalk");
const express = require("express");
const debug = require("debug")("thingsIKnow:routes");
const Thing = require("../../database/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const thing = await Thing.find();

  res.json(thing);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedThing = await Thing.findById(id);
    if (searchedThing) {
      res.json(searchedThing);
    } else {
      const error = new Error("Thing not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedThing = await Thing.findByIdAndDelete(id);
    if (searchedThing) {
      res.json("deleted");
    } else {
      const error = new Error("Thing not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedThing = await Thing.findByIdAndDelete(id);
    if (searchedThing) {
      res.json("deleted");
    } else {
      const error = new Error("Thing not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const thing = req.body;
    const newThing = await Thing.create(thing);
    res.json(newThing);
  } catch (error) {
    error.code = 400;
    error.message = "fallo";
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Thing.findByIdAndUpdate(_id, req.body);
    res.json(req.body);
  } catch (error) {
    error.code = 400;
    error.message = "Failed request";
    next(error);
  }
});
module.exports = router;
