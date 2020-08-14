const BeerTypeController = require('../controllers/beer-type-controller');

module.exports = (app) => {
    const beerTypeController = new BeerTypeController(app);

    app.get('/api/beer-type', (req, res) => beerTypeController.index(req, res));
    app.get('/api/beer-type/:id', (req, res) => beerTypeController.show(req, res));
};
