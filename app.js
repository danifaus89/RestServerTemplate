//REQUIRES
require("dotenv").config();
const Server = require("./models/server");
//VARIABLES

//CODE
const server = new Server();

server.listen();
