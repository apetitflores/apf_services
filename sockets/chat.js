const { Server } = require("socket.io");
const io = new Server();

io.on('connection', (socket) => {

	console.log('a user connected');

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
});

module.exports = io;
