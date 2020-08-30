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
        const infos = {
            name: req.body.name,
            ebc: parseInt(req.body.ebc, 10),
            originCode: req.body.code
        }
    
        validator.addSchema('malt_schema', maltDataInfo);

        let validateData;
        try {
            validateData = validator.validate(infos, 'malt_schema');

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(Malt.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }
}

module.exports = MaltController;
