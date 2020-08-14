const Repository = require('./repository');
const YeastType = require('../entities/yeast-type');

class YeastTypeRepository extends Repository {
    constructor(app) {
        super(app, 'yeast-type');
    }

    find(params = {}) {
        return super.find(params)
            .then(query => query.result.map(yeastType => YeastType.createNew(yeastType)));
    }

    findOne(params = {}) {
        return super.findOne(params)
            .then(query => {
                if (!query.result) {
                    return null;
                }

                return YeastType.createNew(query.result);
            });
    }

    persist(yeastType) {
        if (!(yeastType instanceof YeastType)) {
            throw new Error('Instance of YeastType needed');
        }

        return super.persist(yeastType);
    }
}

module.exports = YeastTypeRepository;
