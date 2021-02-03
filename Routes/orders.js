//import express
const express = require("express");
//give router the value express.Router()
const router = express.Router();
//import the ordersControllers
const ordersControllers = require("../Controllers/orders");

//Set the user Routes
router.get("/:id", ordersControllers.getByID);
router.get("/", ordersControllers.getAll);

//export the orders Routes
module.exports = router;
