const socket = io.connect('https://cryptic-brook-36573.herokuapp.com');

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>'+ data.message +'</p>';
});

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + 'is typing...</em></p>';
});
