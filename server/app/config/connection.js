var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: "pre-prod-database.mysql.database.azure.com",
      user: "test_user@pre-prod-database",
      password: "QaNH4Z9ey38CSM7y",
      database: "test_exam"
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
