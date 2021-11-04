const debug = require("debug")("thingsIKnown:database");

const chalk = require("chalk");
const mongoose = require("mongoose");

const dataBaseProduction = process.env.MONGODB_PRODUCTION;
const dataBaseDevelopement = process.env.MONGODB_DEVELOPEMENT;

const dataBase = (dataBaseParam) => {
  mongoose.connect(dataBaseParam, (error) => {
    if (dataBaseParam === dataBaseProduction) {
      debug(chalk.magentaBright("Connected to Production data base"));
    } else if (dataBaseParam === dataBaseDevelopement) {
      debug(chalk.magentaBright("Connected to developement data base"));
    }
    if (error) {
      debug(chalk.red("No se ha podido iniciar la base de datos."));
      debug(chalk.red(error.message));
    }
  });
};

module.exports = dataBase;
