

//===============IMPORT THE ORM to CREATE FUNCTIONS THAT WILL INTERACT WITH THE DATABASE
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  

  //============CREATE - THE VARIABLES COL AND VALS ARE ARRAYS.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },


  //==============UPDATE

update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//=============EXPORT THE DATABASE FUNCTIONS FOR THE CONTROLLER (burgersController.js).
module.exports = burgers;


