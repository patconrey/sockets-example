var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/css/main.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/main.css");
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', function() {
    console.log('a user connected');
});

io.on('disconnect', function() {
    console.log('a user disconnected');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('MESSAGE: ' + msg);
        io.emit('chat message', msg);
    });
});