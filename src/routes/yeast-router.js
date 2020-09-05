const YeastController = require('./../controllers/yeast-controller');

module.exports = (app) => {
    const yeastController = new YeastController(app);

    app.get('/api/yeasts', (req, res) => yeastController.index(req, res));
    app.get('/api/yeasts/:id', (req, res) => yeastController.show(req, res));
    app.post('/api/yeasts', (req, res) => yeastController.create(req, res));
    app.delete('/api/yeasts/:id', (req, res) => yeastController.delete(req, res));
    app.post('/api/yeasts/:id', (req, res) => yeastController.update(req, res));
};
