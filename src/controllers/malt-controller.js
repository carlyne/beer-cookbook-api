const ResourceController = require('./resource-controller');
const MaltRepository = require('../repositories/malt-repository');

class MaltController extends ResourceController {
    constructor(app) {
        super(new MaltRepository(app, 'malt'));
    }
}

module.exports = MaltController;