const HopCategoryController = require('../controllers/hop-category-controller');

module.exports = (app) => {
    const hopCategoryController = new HopCategoryController(app);

    app.get('/api/hop-categories', (req, res) => hopCategoryController.index(req, res));
    app.get('/api/hop-categories/:id', (req, res) => hopCategoryController.show(req, res));
    app.post('/api/hop-categories', (req, res) => hopCategoryController.create(req, res));
    app.delete('/api/hop-categories/:id', (req, res) => hopCategoryController.delete(req, res));
    app.post('/api/hop-categories/:id', (req, res) => hopCategoryController.update(req, res));
};
