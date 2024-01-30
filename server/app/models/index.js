const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.signup  = require("./signup.model.js")(mongoose);
db.productcategory  = require("./productcategory.model.js")(mongoose);
db.productlist  = require("./productlist.model.js")(mongoose);
db.transaction  = require("./transaction.model.js")(mongoose);
module.exports = db;
