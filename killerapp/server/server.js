/**
 * Create node js express instance
 *
 * @param {object} express
 */
var fs = require('fs'),

    express = require('express'),

    app = express(),

    bodyParser = require('body-parser'),
    compression = require('compression'),

    cors = require('cors'),

    corsOptions = {
        methods: [ 'GET', 'PUT', 'POST', 'DELETE', 'OPTIONS' ],
        allowedHeaders: [ 'Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With' ],
        credentials: true
    },

    socketio = require('socket.io'),
    io = new socketio({ path: '/' }),

    log4js = require('log4js'),
    logger = log4js.getLogger();

//Init diskspace node js extension
//var diskspace = require('diskspace');

//log server startup
logger.info('Starting node js server...');

//disable overhead headers
app.disable('x-powered-by');
app.disable('etag');

//setup url encoding, expected format is json
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

//create server & and attach server
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    logger.info('Andy\'s first running socket API listening at %s:%d', server.address().address, server.address().port);
});

io.attach(server);

io.on('connection', function (socket) {
    logger.debug('Socket %s connected', socket.id);
});
