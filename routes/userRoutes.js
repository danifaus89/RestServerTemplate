const { Router } = require("express");
const {
	getUsers,
	updateUsers,
	deleteUsers,
	insertUsers,
} = require("../controllers/userController");

const router = Router();

router.get("/", getUsers);

router.put("/:id", updateUsers);

router.delete("/:id", deleteUsers);

router.post("/", insertUsers);

module.exports = router;
