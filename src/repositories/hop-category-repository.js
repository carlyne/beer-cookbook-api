const Repository = require('./repository');
const HopCategory = require('../entities/hop-category');

class HopCategoryRepository extends Repository {
    constructor(app) {
        super(app, 'hop-category');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(hopCategory => HopCategory.createNew(hopCategory)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return HopCategory.createNew(query.result);
            });
    }

    persist(hopCategory) {
        if (!(hopCategory instanceof HopCategory)) {
            throw new Error('Instance of HopCategory needed');
        }

        return super.persist(hopCategory);
    }
}

module.exports = HopCategoryRepository;
