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
      strategy.create(req.body,res);
    });
    app.put('/strategy/:id',function(req,res) {
      strategy.update(req.body.name,req.params.id,res);
    });

    app.get('/lifetime',function(req,res) {
      lifetime.get(res);
    });
    app.get('/lifetime/:id',function(req,res) {
      lifetime.getByID(req.params.id,res);
    });
    app.post('/lifetime',function(req,res) {
      lifetime.create(req.body,res);
    });
    app.put('/lifetime/:id',function(req,res) {
      lifetime.update(req.body.name,req.params.id,res);
    });


    app.get('/lifetime/getByStrategyID/:strategy_id',function(req,res) {
      console.log(req.params.strategy_id)
      lifetime.getByStrategyID(req.params.strategy_id,res);
    });

    app.get('/getTimeRange',function(req,res) {
      lifetime.getByStrategyID(req.params.strategy_id,res);
    });
    app.get('/getDailyCost',function(req,res) {
      lifetime.getDailyCost(res);
    });

  }
};

