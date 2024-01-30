const { transaction } = require("../models");
const db = require("../models");
const Transaction = db.transaction;



exports.create = (req, res) => {
    // Create a Employee
    const transaction = new Transaction({
        Slno: req.body.Slno,
        Dateoftxn: req.body.Dateoftxn,
        Subject: req.body.Subject,
        Description: req.body.Description,
        DebitCredit: req.body.DebitCredit,
        Closingbalance: req.body.Closingbalance,
        CategoryINS: req.body.CategoryINS,
        Classification: req.body.Classification,
    });
  
    // Save Tutorial in the database
   transaction
      .save(signup)
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


exports.findAll = (req, res) => {
        // const title = req.query.title;
        // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
      
        transaction.find()
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



    //   the area where u use fetch req