const ResourceController = require('./resource-controller');
const HopRepository = require('../repositories/hop-repository');

class HopController extends ResourceController {
    constructor(app) {
        super(new HopRepository(app));
    }
}

module.exports = HopController;
