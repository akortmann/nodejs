/**
 * Create node js express instance
 *
 * @param {object} express
 */
var fs = require('fs'),

    express = require('express'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    socket = require('socket.io');

    var server = connect().
        use(connect.static('/client')).
        listen(1337);

    var io = socket.listen(server);
    console.log("Server started and listen to http://127.0.0.1:1337");
    console.log('JAUSEN');

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
var port = process.env.PORT || 8989;
var server = app.listen(port, function () {
    logger.info('Andy\'s first running socket API listening at %s:%d', server.address().address, server.address().port);
});

io.attach(server);

io.on('connection', function (socket) {
    logger.debug('Socket %s connected', socket.id);
});
