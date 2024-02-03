const io = require('socket.io')(8000);
console.log("started server");

const users = {};


// cd .\nodeserver\     nodemon .\index.js
io.on('connection', socket => {
    
    socket.on('new-user-joined', name => {
        console.log("new user", name);
        users[socket.id] = name;
        console.log("new user", name);
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });
});



// const io = require('socket.io')(8000);

// const user={};
// io.on('connection', socket =>{
//     socket.on('new-user-joined', name=>{
//         user[socket.id]=name;
//         console.log("new user", name);
//         socket.broadcast.emit('user joined', name);
//     });
// socket.on('send', message =>{
//     socket.broadcast.emit('receive',{message: message, name: user[ServiceWorker.id]})
// });
// })
