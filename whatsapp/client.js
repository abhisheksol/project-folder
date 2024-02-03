
const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageinp');
const messagecontainer = document.querySelector('.container');

const nav = prompt("Enter your name");
console.log(nav);
socket.emit('new-user-joined', nav);