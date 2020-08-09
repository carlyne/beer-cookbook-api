const ResourceController = require('./resource-controller');
const MaltRepository = require('./../repositories/malt');

class MaltController extends ResourceController {
    constructor(app) {
        super(new MaltRepository(app, 'malt'));
    }
}

module.exports = MaltController;