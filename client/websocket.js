import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://192.168.1.10:3000');

socket.on('grr', msg => {
  console.log(msg, 'MESSAGE FROM Server!!!!!!!!!!!!!');
});

export default socket;
