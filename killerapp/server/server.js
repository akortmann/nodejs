/**
 * Create node js express instance
 *
 * @param {object} express
 */
var fs = require('fs'),

    express = require('express'),
    socket = require('socket.io'),
    connect = require('connect'),
    serveStatic = require('serve-static');

    log4js = require('log4js'),
    logger = log4js.getLogger();

    var app = connect();
    var server = connect().
        use(serveStatic('/client')).
        listen(1337);

    // create socket io server
    var io = socket.listen(server);

    //on connection event
    io.on('connection', function (socket) {
        logger.debug('Socket %s connected', socket.id);
    });


    /**
     * Recive pushmessage
     *
     * @param {object} req
     * @param {object} res
     */
    app.post('/push/send/', function (req, res) {

        logger.info('Try to send push...');
        logger.info(req);
        logger.info(res);

        //io.emit('push', {});
    });