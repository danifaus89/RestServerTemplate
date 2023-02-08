const { response } = require("express");

const getUsers = (req, res = response) => {
	const params = req.query;

	res.send("get api from controller");
};

const updateUsers = (req, res = response) => {
	const id = req.params.id;

	res.send("put api from controller");
};

const deleteUsers = (req, res = response) => {
	res.send("delete api from controller");
};

const insertUsers = (req, res = response) => {
	const body = req.body;

	res.json({
		msg: "post api from controller",
		body: body,
	});
};

module.exports = {
	getUsers,
	updateUsers,
	deleteUsers,
	insertUsers,
};
