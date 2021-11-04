require("dotenv").config();
const inquirer = require("inquirer");
const dataBase = require("./database/index");

const initializeServer = require("./server/index");

const dataBaseProduction = process.env.MONGODB_PRODUCTION;
const dataBaseDevelopement = process.env.MONGODB_DEVELOPEMENT;

(async () => {
  const answers = await inquirer.prompt([
    {
      name: "port",
      type: "input",
      message: "¿En qué puerto desea que se inicie la API?",
      default: 4000,
    },
    {
      name: "database",
      type: "list",
      message: "¿Qué base de datos quieres usar?",
      choices: [
        {
          name: "Development",
          value: "development",
        },
        {
          name: "Production",
          value: "production",
        },
      ],
      default: "production",
    },
    {
      name: "isAllowed",
      type: "confirm",
      message:
        "¿Quieres permitir que el cliente pueda crear, borrar y modificar?",
      default: true,
    },
  ]);
  initializeServer(answers.port || process.env.SERVER_PORT_API || 6000);
  dataBase(
    answers.database === "production"
      ? dataBaseProduction
      : dataBaseDevelopement
  );
})();
