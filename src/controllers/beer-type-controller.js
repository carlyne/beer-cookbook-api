const ResourceController = require('./resource-controller');
const BeerTypeRepository = require('../repositories/beer-type-repository');

class BeerTypeController extends ResourceController {
    constructor(app) {
        super(new BeerTypeRepository(app));
    }
}

module.exports = BeerTypeController;
