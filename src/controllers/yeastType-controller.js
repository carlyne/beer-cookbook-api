const ResourceController = require('./resource-controller');
const YeastTypeRepository = require('../repositories/yeastType-repository');

class YeastTypeController extends ResourceController {
    constructor(app) {
        super(new YeastTypeRepository(app));
    }
}

module.exports = YeastTypeController;
