const ResourceController = require('./resource-controller');
const HopCategoryRepository = require('../repositories/hopCategory-repository');

class HopCategoryController extends ResourceController {
    constructor(app) {
        super(new HopCategoryRepository(app));
    }
}

module.exports = HopCategoryController;
