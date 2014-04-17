var io = require('socket.io');
var datagram = require('dgram');
var datagramserver = datagram.createSocket('udp4');

module.exports = {
    type: 'Socket',
    services: {
        'initialize': function(server) {
            io = io.listen(server);
            io.sockets.on('connection', function (socket) {
              socket.emit('connect', 'socket connected ok - now open another CLI to send random will ferrel quotes and run >> node client' + '<br/><br/>');
            });
        },
        'datagram': function(port){
            datagramserver.on('error', function (error) {
              console.log('Error : ' + error);
              datagramserver.close();
            });

            datagramserver.on('message', function (msg, rinfo) {
              console.log('server got: ' + msg + ' from ' + rinfo.address + ':' + rinfo.port);
              var message = msg.toString();
              io.sockets.emit('message', message);
            });

            datagramserver.on('listening', function () {
              var address = datagramserver.address();
              console.log('datagramserver listening ' + address.address + ':' + address.port);
            });
            datagramserver.bind(port);
        }
    }
}

