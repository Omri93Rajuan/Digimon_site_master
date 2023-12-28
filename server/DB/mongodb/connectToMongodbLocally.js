const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect(
    "mongodb+srv://Omri93Rajuan:1e2we3qwe@digimonweb.67z03q8.mongodb.net/"
  )
  .then(() => console.log(chalk.magentaBright("connected to MongoDb Locally!")))
  .catch((error) =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
