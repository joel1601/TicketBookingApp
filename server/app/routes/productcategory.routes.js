const {productcategory } = require("../models/index.js");

module.exports = app => {
    const productcategory = require("../controllers/productcategory.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/create", productcategory.create);

    router.post("/upload", productcategory.upload)
  
    app.use("/api/productcatgory", router);
  };