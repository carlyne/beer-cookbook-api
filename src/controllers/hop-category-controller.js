const ResourceController = require('./resource-controller');
const HopCategoryRepository = require('../repositories/hop-category-repository');

class HopCategoryController extends ResourceController {
    constructor(app) {
        super(new HopCategoryRepository(app));
    }
}

module.exports = HopCategoryController;
