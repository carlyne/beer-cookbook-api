require('dotenv').config();

const {
    NODE_PORT,
    DB_URI,
    DB_NAME,
    DB_CACHE_ENABLED
} = process.env;

const { createApp, createServer } = require('yion');
const databasePlugin = require('./src/plugin/database-plugin')(DB_URI, DB_NAME, DB_CACHE_ENABLED);

const app = createApp();
const server = createServer(app, [databasePlugin]);

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.use((req, res, next) => {
    /*if (req.headers.origin) {
        const origin = req.headers.origin.match(/^(?:http|https):\/\/\w+\.beelab\.tk$/i);
        res.set('Access-Control-Allow-Origin', origin !== null ? origin[0] : 'null');
    } else {
        res.set('Access-Control-Allow-Origin', 'null');
    }*/

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.send();
    }

    next();
});

// ROUTES
require('./src/routes/malt-router')(app);

server
    .listen(NODE_PORT)
    .on('listening', () => console.log(`Server started on port ${NODE_PORT}`));
