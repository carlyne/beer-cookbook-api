const ResourceController = require('./resource-controller');
const MaltRepository = require('../repositories/malt-repository');
const Malt = require('../entities/malt');
const maltDataInfo = require('../../config/validations/malt.json');
const validator = require('../services/validator');


class MaltController extends ResourceController {
    constructor(app) {
        super(new MaltRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, maltDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(Malt.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, maltDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const malt = Object.assign(object, validateData);
                return this.repository.persist(malt).then(() => {
                    res.json(malt);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = MaltController;
