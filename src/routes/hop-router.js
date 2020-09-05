const HopController = require('./../controllers/hop-controller');

module.exports = (app) => {
    const hopController = new HopController(app);

    app.get('/api/hops', (req, res) => hopController.index(req, res));
    app.get('/api/hops/:id', (req, res) => hopController.show(req, res));
    app.post('/api/hops', (req, res) => hopController.create(req, res));
    app.delete('/api/hops/:id', (req, res) => hopController.delete(req, res));
    app.post('/api/hops/:id', (req, res) => hopController.update(req, res));
};
