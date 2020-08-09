
class Repository {
    constructor(app, collection) {
        this.app = app;
        this.collection = collection;
    }

    /**
     * @param {Object} [params={}]
     * @returns {Promise}
     */
    find(params = {}) {
        return this.database.query({
            type: 'find',
            params,
            collection: this.collection
        });
    }

    /**
     * @param {Object} [params={}]
     * @returns {Promise}
     */
    findOne(params = {}) {
        return this.database.query({
            type: 'findOne',
            params,
            collection: this.collection
        });
    }

    get database() {
        return this.app.requester;
    }
}

module.exports = Repository;