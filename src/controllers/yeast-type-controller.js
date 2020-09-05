const ResourceController = require('./resource-controller');
const YeastTypeRepository = require('../repositories/yeast-type-repository');

class YeastTypeController extends ResourceController {
    constructor(app) {
        super(new YeastTypeRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, yeastTypeDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(YeastType.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, yeastTypeDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const yeastType = Object.assign(object, validateData);
                return this.repository.persist(yeastType).then(() => {
                    res.json(yeastType);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = YeastTypeController;
