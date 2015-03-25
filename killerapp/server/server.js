/**
 * Created by akortmann on 16.12.2014.
 */


    var connect = require('connect');
    var serveStatic = require('serve-static');
    var socket = require('socket.io');

    var server = connect().
        use(connect.static('/client')).
        listen(1337);

    var io = socket.listen(server);
    console.log("Server started and listen to http://127.0.0.1:1337");
    console.log('JAUSEN');

    io.sockets.on('connection', function(socket) {
        console.log('client serverjs connected!');
    });

    io.sockets.on('connection', function(socket) {
        socket.emit('hello', 'Paul');
    });