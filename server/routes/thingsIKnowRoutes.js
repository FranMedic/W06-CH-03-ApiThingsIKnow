const chalk = require("chalk");
const express = require("express");
const debug = require("debug")("thingsIKnow:routes");
const Thing = require("../../database/models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const thing = await Thing.find();
  debug(chalk.red("hola exito?"));
  res.json(thing);
});

module.exports = router;
