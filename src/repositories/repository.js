
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

    persist(object) {
        if (object.id) {
            return this.database.query({
                type: 'update',
                collection: this.collection,
                selector: { _id: object.id },
                params: { $set: object }
            });
        }

        return this.database.query({
            type: 'insert',
            collection: this.collection,
            params: object
        });
    }

    delete(object) {
        return this.database.query({
            type: 'remove',
            collection: this.collection,
            selector: { _id: object.id }
        });
    }

    get database() {
        return this.app.requester;
    }
}

module.exports = Repository;
