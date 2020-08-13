const ResourceController = require('./resource-controller');
const YeastRepository = require('../repositories/yeast-repository');

class YeastController extends ResourceController {
    constructor(app) {
        super(new YeastRepository(app));
    }
}

module.exports = YeastController;
