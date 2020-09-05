const ResourceController = require('./resource-controller');
const HopCategoryRepository = require('../repositories/hop-category-repository');

class HopCategoryController extends ResourceController {
    constructor(app) {
        super(new HopCategoryRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, hopCategoryDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(HopCategory.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, hopCategoryDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const hopQuantity = Object.assign(object, validateData);
                return this.repository.persist(hopQuantity).then(() => {
                    res.json(hopQuantity);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = HopCategoryController;
