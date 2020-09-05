const ResourceController = require('./resource-controller');
const YeastRepository = require('../repositories/yeast-repository');

class YeastController extends ResourceController {
    constructor(app) {
        super(new YeastRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, yeastDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(Yeast.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, yeastDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const yeast = Object.assign(object, validateData);
                return this.repository.persist(yeast).then(() => {
                    res.json(yeast);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = YeastController;
