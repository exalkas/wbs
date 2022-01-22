const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);


const { Server } = require("socket.io");
const io = new Server(server); // instance of the Server object from socket.io

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// io has 'on' method
io.on('connection', (socket) => { // on the event named 'connection', the callback function will be executed
  console.log('a user connected');

  socket.on('message', data => {
    console.log('Message event: data is', data)

    // when 'message' event occurs, send the data to ALL connected users
    io.emit('message from server', data)
  })

  socket.on('typing', user => {
    console.log('typing event from user', user)
    socket.broadcast.emit('typing', user)
  })
});

server.listen(3004, () => {
  console.log('listening on *:3004');
});