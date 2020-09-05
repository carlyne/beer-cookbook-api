const ResourceController = require('./resource-controller');
const HopRepository = require('../repositories/hop-repository');

class HopController extends ResourceController {
    constructor(app) {
        super(new HopRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, hopDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(Hop.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, hopDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const hop = Object.assign(object, validateData);
                return this.repository.persist(hop).then(() => {
                    res.json(hop);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = HopController;
