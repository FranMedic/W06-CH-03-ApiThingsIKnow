const express = require("express");
const debug = require("debug")("calculator:server");
const morgan = require("morgan");
const chalk = require("chalk");
const { generalErrorHandler, notFoundHandler } = require("./error");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.greenBright(`Escuchando al puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.magenta("Ha habido un error salvaje al iniciar el server."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.cyan(`El puerto ${port} está en uso.`));
    }
  });
};

app.use(morgan("dev"));
app.use((req, res, next) => {
  debug(chalk.blueBright("llegue a una request"));
});
app.use(notFoundHandler);
app.use(generalErrorHandler);
module.exports = initializeServer;
