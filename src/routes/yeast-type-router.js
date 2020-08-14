const YeastTypeController = require('../controllers/yeast-type-controller');

module.exports = (app) => {
    const yeastTypeController = new YeastTypeController(app);

    app.get('/api/yeast-type', (req, res) => yeastTypeController.index(req, res));
    app.get('/api/yeast-type/:id', (req, res) => yeastTypeController.show(req, res));
};
