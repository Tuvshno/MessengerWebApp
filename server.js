var express  = require('express')
var socket = require('socket.io')

var app = express()
<<<<<<< HEAD

var server = socket(app)

=======
var server = app.listen(4000, function(){
    console.log("listening to port 4000")
})

app.use(express.static('public'))

var io = socket(server)

io.on('connection', function(socket){
    console.log("connected to the socket " + socket.id)

    socket.on('message', function(data){
        console.log(data)
    })
})
>>>>>>> socketImplementation
