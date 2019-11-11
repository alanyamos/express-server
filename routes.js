const ItemController = require('./controllers/item-controller');

module.exports = function (router) {
    router.get('/online', (req, res) => res.json(new Date()));
    router.get('/items', ItemController.listAll);
};