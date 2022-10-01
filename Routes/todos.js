//import express
const express = require("express");
//give router the value express.Router()
const router = express.Router();

//import the todosControllers
const todosControllers = require("../Controllers/todos");

//Setting the user Routes (associating a function/Controller/Middleware to an endpoint)
router.get(
  "/:id",
  todosControllers.authenticateToken,
  todosControllers.getByID
);
router.get("/", todosControllers.authenticateToken, todosControllers.getAll);
router.post("/", todosControllers.authenticateToken, todosControllers.create);
router.put(
  "/:id",
  todosControllers.authenticateToken,
  todosControllers.updateById
);
router.delete(
  "/:id",
  todosControllers.authenticateToken,
  todosControllers.deleteById
);

//export the user Routes
module.exports = router;
