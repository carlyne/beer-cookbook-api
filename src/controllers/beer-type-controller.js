const ResourceController = require('./resource-controller');
const BeerTypeRepository = require('../repositories/beer-type-repository');

class BeerTypeController extends ResourceController {
    constructor(app) {
        super(new BeerTypeRepository(app));
    }

    create(req, res) {
        let validateData;
        try {
            validateData = validator.validate(req.body, beerTypeDataInfo.create);

        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        this.repository.persist(BeerType.createNew(validateData)).then((data) => {
            res.status(201).json(data.result.ops[0]);
        });
    }

    update(req, res) {
        this.repository.findOne({_id: req.params.id}).then(object => {

            if(object) {
                let validateData;
                try {
                    validateData = validator.validate(req.body, beerTypeDataInfo.edit);
                } catch (err) {
                    return res.status(400).json({ message: err.message });
                }

                const beerType = Object.assign(object, validateData);
                return this.repository.persist(beerType).then(() => {
                    res.json(beerType);
                });
            }

           res.status(404).send();
        });
    }
}

module.exports = BeerTypeController;
