const debug = require("debug")("thingsIKnow:database");

const chalk = require("chalk");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBPATATA, (error) => {
  if (error) {
    debug(chalk.magenta("No se pudo iniciar la base de datos halp."));
    debug(chalk.cyan(error.message));
    return;
  }
  debug(chalk.green("Conectado a la base de datoh"));
});
