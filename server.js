require('dotenv').config();

const {
    NODE_PORT,
    DB_URI,
    DB_NAME,
    DB_CACHE_ENABLED
} = process.env;

const { createApp, createServer } = require('yion');
const databasePlugin = require('./src/plugin/database-plugin')(DB_URI, DB_NAME, DB_CACHE_ENABLED);
const MaltController = require('./src/controllers/malt-controller');

const app = createApp();
const server = createServer(app, [databasePlugin]);

const maltCtrl = new MaltController(app);

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.get('/api/malts', (req, res) => {
    maltCtrl.index(req, res);
});

app.get('/api/malt/:id', (req, res) => {
    maltCtrl.show(req, res);
});

server
    .listen(NODE_PORT)
    .on('listening', () => console.log(`Server started on port ${NODE_PORT}`));
