const YeastTypeController = require('../controllers/yeast-type-controller');

module.exports = (app) => {
    const yeastTypeController = new YeastTypeController(app);

    app.get('/api/yeast-types', (req, res) => yeastTypeController.index(req, res));
    app.get('/api/yeast-types/:id', (req, res) => yeastTypeController.show(req, res));
    app.post('/api/yeast-types', (req, res) => yeastTypeController.create(req, res));
    app.delete('/api/yeast-types/:id', (req, res) => yeastTypeController.delete(req, res));
    app.post('/api/yeast-types/:id', (req, res) => yeastTypeController.update(req, res));
};
