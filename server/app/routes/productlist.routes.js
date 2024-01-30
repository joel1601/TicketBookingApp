const {productlist} = require("../models/index.js");

module.exports = app => {
    const productlist = require("../controllers/productlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/create", productcategory.create);

    router.post("/create", productlist.create)

    router.get("/:CategoryID", productlist.findAll)
  
    app.use("/api/productlists", router);
  };