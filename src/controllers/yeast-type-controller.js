const ResourceController = require('./resource-controller');
const YeastTypeRepository = require('../repositories/yeast-type-repository');

class YeastTypeController extends ResourceController {
    constructor(app) {
        super(new YeastTypeRepository(app));
    }
}

module.exports = YeastTypeController;
