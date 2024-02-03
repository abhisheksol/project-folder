const { log } = require('console');
const express = require('express');
const { get } = require('http');
const app=express();
const http = require('http').createServer(app);

const PORT=process.env.PORT ||4000

http.listen(PORT,()=>{
    console.log("running the test");
})
app.use(express.static(__dirname+"/public"))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log("socket connected boss");
})