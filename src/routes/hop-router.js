const HopController = require('./../controllers/hop-controller');

module.exports = (app) => {
    const hopController = new HopController(app);

    app.get('/api/hop', (req, res) => hopController.index(req, res));
    app.get('/api/hop/:id', (req, res) => hopController.show(req, res));
};
