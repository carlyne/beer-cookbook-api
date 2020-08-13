const ResourceController = require('./resource-controller');
const BeerTypeRepository = require('../repositories/beerType-repository');

class BeerTypeController extends ResourceController {
    constructor(app) {
        super(new BeerTypeRepository(app));
    }
}

module.exports = BeerTypeController;
