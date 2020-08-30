const MaltController = require('./../controllers/malt-controller');

module.exports = (app) => {
    const maltController = new MaltController(app);

    app.get('/api/malts', (req, res) => maltController.index(req, res));
    app.get('/api/malts/:id', (req, res) => maltController.show(req, res));
    app.post('/api/malts', (req, res) => maltController.create(req, res));
    app.delete('/api/malts/:id', (req, res) => maltController.delete(req, res));
};
