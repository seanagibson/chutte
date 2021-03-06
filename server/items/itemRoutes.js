var itemController = require('./itemController.js');
var sendGridController = require('./itemHelpers/sendGridController.js');

module.exports = function(app) {
  app.post('/create', itemController.postItem);
  app.get('/', itemController.getItems);
  app.post('/buyItem', itemController.buyItem);
};
