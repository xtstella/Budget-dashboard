var connection = require ('../config/connection');

function Strategy() {
  this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from strategy', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get strategy successful");
      });
    });
  };
  this.getIDs = function(res) {
    connection.acquire(function(err,con) {
      con.query('select id from strategy', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get strategy ID successful");
      });
    });
  };
  this.getByID = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('select * from strategy where id = ?', id, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get by Strategy ID successful");
      });
    });
  };
};

module.exports = new Strategy();
