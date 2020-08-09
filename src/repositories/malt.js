const Repository = require('./repository');

class MaltRepository  extends Repository {
    constructor(app, collection) {
        super(app, collection);
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
}

module.exports = MaltRepository;