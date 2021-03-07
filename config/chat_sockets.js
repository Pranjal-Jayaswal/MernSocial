module.exports.chatSockets = function(socketServer){
    const io = require('socket.io')(socketServer);

    io.on("connection", function(socket){
        console.log('new connection received', socket.id);
socket.send("hello2222");
        socket.on("disconnect", function(){
            console.log('socket disconnected!');
        });

        
        socket.on('join_room', function(data){
            console.log('joining request rec.', data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined', data);
        })

    });

}
