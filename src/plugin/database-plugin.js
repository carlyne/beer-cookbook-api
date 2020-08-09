const { Query } = require('@beelab/toolbox');

module.exports = (uri, dbname, cache = false) => {
    return {
        type: 'database',
        handle: (req, res, app, next) => {
            if (!app.requester) {
                app.requester = new Query(uri, dbname, cache);
            }

            next();
        },
    }
};
