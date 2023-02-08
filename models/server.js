const express = require("express");
const cors = require("cors");

const port = 8080;

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.userPath = "/api/users";

		//MIDDLEWARES
		this.middlewares();
		this.app.use(express.json()); //lectura y parseo del body en json

		//ROUTES
		this.routes();
	}

	middlewares() {
		this.app.use(cors());
		//directorio publico
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.userPath, require("../routes/userRoutes"));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Server running on port: ", this.port);
		});
	}
}

module.exports = Server;