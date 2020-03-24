var connection = require ('../config/connection');

function Lifetime() {
  this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from lifetime', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get lifetime successful");
      });
    });
  };
  this.getByID = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('select * from lifetime where id = ?', id, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get by lifetime ID successful");
      });
    });
  };
  this.getByStrategyID = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('select * from lifetime where strategy_id = ?', id, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get lifetime by Strategy ID successful");
      });
    });
  };

  this.getDailyCost = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from lifetime where strategy_id = ?', id, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get lifetime by Strategy ID successful");
      });
    });
  };

};

module.exports = new Lifetime();
