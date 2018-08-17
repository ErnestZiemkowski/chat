const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('llistening on port: ' + port);
});

app.set('views', path.join(__dirname, './public'))
app.use(express.static('./public'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection ' + socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

});
