const Repository = require('./repository');
const BeerType = require('./../entities/beerType');

class BeerTypeRepository extends Repository {
    constructor(app) {
        super(app, 'beerType');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(beerType => BeerType.createNew(beerType)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return BeerType.createNew(query.result);
            });
    }

    persist(beerType) {
        if (!(beerType instanceof BeerType)) {
            throw new Error('Instance of BeerType needed');
        }

        return super.persist(beerType);
    }
}

module.exports = BeerTypeRepository;
