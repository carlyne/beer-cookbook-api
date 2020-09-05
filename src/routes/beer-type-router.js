const BeerTypeController = require('../controllers/beer-type-controller');

module.exports = (app) => {
    const beerTypeController = new BeerTypeController(app);

    app.get('/api/beer-types', (req, res) => beerTypeController.index(req, res));
    app.get('/api/beer-types/:id', (req, res) => beerTypeController.show(req, res));
    app.post('/api/beer-types', (req, res) => beerTypeController.create(req, res));
    app.delete('/api/beer-types/:id', (req, res) => beerTypeController.delete(req, res));
    app.post('/api/beer-types/:id', (req, res) => beerTypeController.update(req, res));
};
