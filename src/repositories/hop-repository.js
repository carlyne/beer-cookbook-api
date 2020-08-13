const Repository = require('./repository');
const Hop = require('./../entities/hop');

class HopRepository extends Repository {
    constructor(app) {
        super(app, 'hop');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(hop => Hop.createNew(hop)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return Hop.createNew(query.result);
            });
    }

    persist(hop) {
        if (!(hop instanceof Hop)) {
            throw new Error('Instance of Hop needed');
        }

        return super.persist(hop);
    }
}

module.exports = HopRepository;
