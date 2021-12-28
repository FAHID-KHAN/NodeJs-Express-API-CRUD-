module.exports = app => {
  const todos = require("../controllers/COntrolTodo.js");

  var router = require("express").Router();

  // Create new todo
  router.post("/", todos.create);

  // Get all todos
  router.get("/", todos.findAll);

  // Get all published todos
  router.get("/published", todos.findAllPublished);

  // Get a single todo with id
  router.get("/:id", todos.findOne);

  // Update a todo with id
  router.put("/:id", todos.update);

  // Delete a todo with id
  router.delete("/:id", todos.delete);

  // Delete all todos
  router.delete("/", todos.deleteAll);

  app.use('/api/todos', router);
};