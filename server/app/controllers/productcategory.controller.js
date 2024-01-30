// const { employee } = require("../models");
const multer = require('multer')
const { productcategory } = require("../models");
const db = require("../models");
const Productcategory = db.productcategory;

const imageModel = require('../models/productcategory.model')


const Storage = multer.diskStorage({
    destination:"upload",
    filename:(req,res,cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage:Storage
}).single('textimage')

exports.upload = (req,res,err) =>{
    if(err){
        console.log(err)
    }
    else{
        const newImage = new imageModel({
            name:req.body.name,
            image:{
                data:req.file.filename,
                contentType:'image/jpg'
            }
        })
        newImage.save(productcategory)
        .then(data => {
          res.send("success");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    }

}

// Create and Save a new Employee
// exports.create = (req, res) => {
//   // Create a Employee
//   const productcategory = new Productcategory({
      
//   });

//   // Save Tutorial in the database
//  productcategory
//     .save(productcategory)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

// exports.login = (req,res)=>{
//   if (!req.body.email || !req.body.password) {
//         res.send({ message: "Content can not be empty!" });
//         return;
//       }
//   const {email,password} = req.body
//   signup.findOne({email:email,password:password})
//   .then (data => {
//   if(data){
//     res.json("exist")
//   }
//   else{
//      res.json("not exist")
//   }
// })
// .catch(err => {
//   res.json("not exist")
// })

// }