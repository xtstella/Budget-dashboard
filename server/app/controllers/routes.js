var strategy = require('../models/strategy');
var lifetime = require('../models/lifetime');

module.exports = {
  configure: function(app) {
    app.get('/strategy',function(req,res) {
      strategy.get(res);
    });
    app.get('/strategy/:id',function(req,res) {
      strategy.getByID(req.params.id,res);
    });
    app.post('/strategy',function(req,res) {
      todo.create(req.body,res);
    });
    app.put('/strategy/:id',function(req,res) {
      todo.update(req.body.name,req.params.id,res);
    });

    app.get('/lifetime',function(req,res) {
      lifetime.get(res);
    });
    app.get('/lifetime/:id',function(req,res) {
      lifetime.getByID(req.params.id,res);
    });
    app.post('/lifetime',function(req,res) {
      todo.create(req.body,res);
    });
    app.put('/lifetime/:id',function(req,res) {
      todo.update(req.body.name,req.params.id,res);
    });


  }
};

