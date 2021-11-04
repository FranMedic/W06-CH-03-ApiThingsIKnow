require("dotenv").config();
require("./database/index");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT_API || 6000;

initializeServer(port);
