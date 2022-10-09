const express = require("express");
const router = express.Router();
const todosControllers = require("../Controllers/todos");

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

module.exports = router;
