/**
 * Created by akortmann on 16.12.2014.
 */


    var connect = require('/home/akortmann/killerapp/server/node_modules/connect');
    var serveStatic = require('/home/akortmann/killerapp/server/node_modules/serve-static');
    var socket = require('/home/akortmann/killerapp/server/node_modules/socket.io');

    //var server = connect().
    //    use(function(req, res) {
    //        res.end('Hallo Browser!');
    //    }).listen(8181);

    var server = connect().
        use(connect.static('/home/akortmann/killerapp/client')).
        listen(8181);

    var io = socket.listen(server);
    console.log("Server started and listen to http://127.0.0.1:8181");
    console.log('JAUSEN');

    io.sockets.on('connection', function(socket) {
        console.log('client serverjs connected!');
    });

    io.sockets.on('connection', function(socket) {
        socket.emit('hello', 'Paul');
    });