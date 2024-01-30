const { signup } = require("../models/index.js");

module.exports = app => {
    const signup = require("../controllers/signup.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", signup.create);

    router.post("/login", signup.login)

    
  
    // Retrieve all Employee
    // router.get("/", signup.findAll);
  
    // // // Retrieve all published Tutorials
    // // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", signup.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", signup.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", signup.delete);
  
    // // // Create a new Tutorial
    // // router.delete("/", tutorials.deleteAll);
  
    app.use("/api/signups", router);
  };