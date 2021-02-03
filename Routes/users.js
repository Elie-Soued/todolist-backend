//import express
const express = require("express");
//give router the value express.Router()
const router = express.Router();
//import the ordersControllers
const usersControllers = require("../Controllers/users");

//Set the user Routes
router.get("/:id", usersControllers.getByID);
router.get("/", usersControllers.getAll);

//export the user Routes
module.exports = router;
