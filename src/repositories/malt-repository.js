const Repository = require('./repository');
const Malt = require('./../entities/malt');

class MaltRepository extends Repository {
    constructor(app) {
        super(app, 'malt');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(malt => Malt.createNew(malt)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return Malt.createNew(query.result);
            });
    }

    persist(malt) {
        if (!(malt instanceof Malt)) {
            throw new Error('Instance of Malt needed');
        }

        return super.persist(malt);
    }
}

module.exports = MaltRepository;
