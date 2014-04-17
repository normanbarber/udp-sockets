var http = require('http'),
    express = require('express'),
    socket = require('./socketserver.js'),
    routes = require('./routes'),
    path = require('path');

var app = express();
app.configure(function () {
    app.set('port', process.env.PORT || 3333);
    app.set('views', __dirname + '/public/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.logger('dev'));
    app.use(express.bodyParser())
    app.use(express.static(path.join(__dirname, 'public')));
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
    var port = 54321;
    socket.services.initialize(server);
    socket.services.datagram(port);
});

app.get('/', routes.index);