/**
 * Create node js express instance
 *
 * @param {object} express
 */
var fs = require('fs'),

    express = require('express'),
    socket = require('socket.io')
connect = require('connect'),
    serveStatic = require('serve-static');


var app = connect();


var server = connect().
    use(serveStatic('/client')).
    listen(1337);

var io = socket.listen(server);
console.log("Server started and listen to http://127.0.0.1:1337");
console.log('JAUSEN');


//disable overhead headers

//setup url encoding, expected format is json

//create server & and attach server
var port = process.env.PORT || 8989;
var server = app.listen(port, function () {
    console.info('Andy\'s first running socket API listening at %s:%d', server.address().address, server.address().port);
});

io.attach(server);

io.on('connection', function (socket) {
    console.info('Socket %s connected', socket.id);
});
