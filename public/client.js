var socket = io.connect('http://localhost:4000')


var button = document.getElementById('send-button')

button.addEventListener('click', function(){
    socket.emit('click', "Button Clicked")
})
