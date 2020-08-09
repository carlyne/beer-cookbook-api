const MaltController = require('./../controllers/malt-controller');

module.exports = (app) => {
    const maltController = new MaltController(app);

    app.get('/api/malts', (req, res) => maltController.index(req, res));
    app.get('/api/malt/:id', (req, res) => maltController.show(req, res));
};
