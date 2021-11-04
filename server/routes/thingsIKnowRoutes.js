const chalk = require("chalk");
const express = require("express");
const debug = require("debug")("thingsIKnow:routes");
const Thing = require("../../database/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const thing = await Thing.find();
  debug(chalk.red("hola exito?"));
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

module.exports = router;
