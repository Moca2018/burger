
// this is the code where we make it talk (node and mysql - because they are diff. languages)
//we are using sequelized


//====================CONNECTION

var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb ) {
    var queryString = "SELECT * FROM burgers";

    connection.query(queryString, function(err, result) {
      if (err) {throw err};
     cb (result);
    });
  },


//====================INSERT ONE

  insertOne: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?,?)";

    connection.query(queryString, [valOfCol[0], valOfCol[1]], function(err, result) {
      if (err) {throw err};
     cb (result);
    });
  },

  //NEED to invoque "insertOne".....? /when i pass into valofcol / NEEDS to be a STRING (using two sting methods. )
  //NOte: i might run into an issue here..because line 15 (val of col 0... it needs to be a string)
  //i migh need to convert into a string method (tostring()) //valOfCol[0].toString();
  // change he querystring... it needs to be a updated statement / instead of 2:06pm
  // with mysql (check link )// mimic that in regards to the table
  // https://www.w3schools.com/sql/sql_update.asp
  //the num of questions marks / with the value that is in the array... for the connection query

//====================UPDATE ONE
 
  updateOne: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "UPDATE burgers SET burger_name = 1, devoured = 2, WHERE id = ?";

    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      return result;
    });
  }
};

module.exports = orm;
console.log(module.exports);

