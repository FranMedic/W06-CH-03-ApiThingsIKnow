const debug = require("debug")("thingsIKnow:errors");

const notFoundHandler = (req, res) => {
  res.status(404).json({ error: "Endpoint not found AIUDAXX" });
};
// eslint-disable-next-line no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  debug("Hubo un errosito de nada UwU: ", error.message);
  const message = error.code ? error.message : "errosito General Petation";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundHandler,
  generalErrorHandler,
};
