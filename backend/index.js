const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(3000, function() {
  console.log('listening on *:3000');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('love', msg => {
    console.log('user woof ', msg);
    io.sockets.emit('grr', msg + 'mewoooow');
  });
});

app.get('/', (req, res) => {
  res.json({ hi: 'hello' });
});
