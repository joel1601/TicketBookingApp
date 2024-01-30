// const { employee } = require("../models");
const { default: cluster } = require("cluster");
const { productlist } = require("../models");
const db = require("../models");
const Productlist = db.productlist;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Create a Employee
  const productlist = new Productlist({
    CategoryID:req.body.CategoryID,
    ProductName:req.body.ProductName,
    ProductRate:req.body.ProductRate,
    Unit:req.body.Unit,
  });

  // Save Tutorial in the database
productlist
    .save(productlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Retrieve all Employee from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    const {CategoryID} = req.params.CategoryID
    productlist.find({CategoryID:"2"})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };