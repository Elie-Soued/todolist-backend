//import express
const express = require("express");
//give router the value express.Router()
const router = express.Router();

//import the usersControllers
const usersControllers = require("../Controllers/users");

//Setting the user Routes (associating a function/Controller/Middleware to an endpoint)
// router.get("/:id", usersControllers.getByID);
// router.get("/", usersControllers.getAll);
router.post("/", usersControllers.create);
// router.put("/:id", usersControllers.updateById);
// router.delete("/:id", usersControllers.deleteById);

//export the user Routes
module.exports = router;
