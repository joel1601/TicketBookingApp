// const { employee } = require("../models");
const { signup } = require("../models");
const db = require("../models");
const Signup = db.signup;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Create a Employee
  const signup = new Signup({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        conformpassword:req.body.conformpassword
  });

  // Save Tutorial in the database
 signup
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

// // Retrieve all Employee from the database.
// exports.findAll = (req, res) => {
//     // const title = req.query.title;
//     // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
//     signup.find()
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };
  
//   // Find a single Employee with an id
//   exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     signup.findById(id)
//       .then(data => {
//         if (!data)
//           res.status(404).send({ message: "Not found Tutorial with id " + id });
//         else res.send(data);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .send({ message: "Error retrieving Tutorial with id=" + id });
//       });
//   };

//   // Update a Employee by the id in the request
// exports.update = (req, res) => {
//     // if (!req.body) {
//     //   return res.status(400).send({
//     //     message: "Data to update can not be empty!"
//     //   });   
//     // }
  
//     const id = req.params.id;
  
//     signup.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update employee with id=${id}. Maybe Tutorial was not found!`
//           });
//         } else res.send({ message: "employee was updated successfully." });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating employee with id=" + id
//         });
//       });
//   };


//   // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     signup.findByIdAndRemove(id, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot delete employee with id=${id}. Maybe employee was not found!`
//           });
//         } else {
//           res.send({
//             message: "employee was deleted successfully!"
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete employee with id=" + id
//         });
//       });
//   };
  
//   // Delete all Tutorials from the database.
//   exports.deleteAll = (req, res) => {
//     signup.deleteMany({})
//       .then(data => {
//         res.send({
//           message: `${data.deletedCount} employee were deleted successfully!`
//         });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all employee."
//         });
//       });
//   };
  
// exports.loginUser = (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     resError(res, { message: "Content can not be empty!" });
//     return;
//   }
//   signup.findOne({ email: req.body.email, status: 1 })
//     .then(async (data) => {
//       console.log(data);
//       if (data && data.status == 0) {
//         resError(res, "Account is Disabled")
//       } else if (data && data.password === md5
//         (req.body.password)) {
//         resSuccess(res, { message: "login success", data });
//       } else if (data && data.password != md5(req.body.password)) {
//         resError(res, "wrong password");
//       } else {
//         resError(res, "User not found");
//       }
//     })
//     .catch((err) => {
//       resError(res, {
//         message: err.message || "Some error occurred while retrieving users.",
//       });
//     });
// };

// exports.findOneUser = (req, res) => {
//   signup.findOne({ email: req.body.userEmail })
//     .then(data => {
//       if (data) {
//         resSuccess(res, { message: `Email ${req.body.userEmail} already exits`, data })
//       } else {
//         resError(res, { message: "User not found" })
//       }
//     })
//     .catch(err => {
//       resError(res, err.message || "Some error occurred while retrieving data")
//     })
// }

exports.login = (req,res)=>{
  if (!req.body.email || !req.body.password) {
        res.send({ message: "Content can not be empty!" });
        return;
      }
  const {email,password} = req.body
  signup.findOne({email:email,password:password})
  .then (data => {
  if(data){
    res.json("exist")
  }
  else{
     res.json("not exist")
  }
})
.catch(err => {
  res.json("not exist")
})

}