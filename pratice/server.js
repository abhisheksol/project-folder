const { log } = require('console');
const express = require('express');
const app=express();
const http = require('http').createServer(app);
 const PORT=process.env.PORT || 4000

http.listen(PORT,()=>{
    console.log("listen to abhishek");
})

// remaining url is not know to the server so we write app.use( which are static folder)
app.use(express.static(__dirname+"/public"))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
const io = require('socket.io')(http)

io.on('connection',(socket)=>{
console.log('connected socket');
socket.on('message',(msg)=>{
    console.log(msg);
    socket.broadcast.emit('message',msg);
    
})
})







// import socket & tell him on which server he has to work 
// const io = require('socket.io')(http) //kutala server mada run karcha ahe he (http) mada socket.io la kam karcha ahe


// io.on('connection',(socket)=>
// {
//     console.log('socket is connected...');
// })












//  const express= require('express');
//  const app=express();

//  const http= require('http').createServer(app);

//  const PORT=process.env.PORT ||4000;

//  http.listen(PORT, ()=>{
//     console.log("abhishek server is ruunning");
//  });

//  app.get('/',(req,res)=>{
//     res.sendFile(__dirname +'/index.html');
//  });