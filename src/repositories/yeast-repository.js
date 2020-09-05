const Repository = require('./repository');
const Yeast = require('./../entities/yeast');

class YeastRepository extends Repository {
    constructor(app) {
        super(app, 'yeast');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(yeast => Yeast.createNew(yeast)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return Yeast.createNew(query.result);
            });
    }

    persist(yeast) {
        if (!(yeast instanceof Yeast)) {
            throw new Error('Instance of Yeast needed');
        }

        return super.persist(yeast);
    }

    delete(yeast) {
        if (!(yeast instanceof Yeast)) {
            throw new Error('Instance of Yeast needed');
        }

        return super.delete(yeast);
    }
}

module.exports = YeastRepository;
