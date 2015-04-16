/**
 * Create node js express instance
 *
 * @param {object} express
 */
var fs = require('fs'),

    express = require('express'),
    socket = require('socket.io'),
    connect = require('connect'),
    http = require('http'),
    serveStatic = require('serve-static'),
    log4js = require('log4js'),
    bodyParser = require('body-parser'),
    logger = log4js.getLogger();

    var app = express();
    var server = connect().
        use(serveStatic('/client')).
        listen(1337);

    // create socket io server
    var io = socket.listen(server);

    //on connection event
    io.on('connection', function (socket) {
        logger.debug('Socket %s connected', socket.id);
    });

    // create and launch server on custom port
    var apiServer = http.createServer(app);
    apiServer.listen(9090);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

/**
     * Recive pushmessage
     *
     * @param {object} req
     * @param {object} res
     */
    app.post('/push/send/', function (req, res) {

        logger.info('Try to send push...');
        logger.info(req.body);

        io.emit('push', {"msg":req.body.msg,"name": req.body.name});
        res.status(201).end();
    });