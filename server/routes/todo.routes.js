module.exports = app => {
    const todo = require("../controllers/todo.controller.js");
    
    const router = require("express").Router();
  
    router.post("/", todo.create);
  
    router.get("/", todo.findAll);
  
    router.get("/completed", todo.findAllUncompleted);

    router.get("/:id", todo.findOne);

    router.put("/:id", todo.update);
 
    router.delete("/:id", todo.delete);
 
    router.delete("/", todo.deleteAll);
  
    app.use('/api/todo', router);
  };