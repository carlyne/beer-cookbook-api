const HopCategoryController = require('../controllers/hop-category-controller');

module.exports = (app) => {
    const hopCategoryController = new HopCategoryController(app);

    app.get('/api/hop-category', (req, res) => hopCategoryController.index(req, res));
    app.get('/api/hop-category/:id', (req, res) => hopCategoryController.show(req, res));
};
