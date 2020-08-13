const YeastController = require('./../controllers/yeast-controller');

module.exports = (app) => {
    const yeastController = new YeastController(app);

    app.get('/api/yeast', (req, res) => yeastController.index(req, res));
    app.get('/api/yeast/:id', (req, res) => yeastController.show(req, res));
};
