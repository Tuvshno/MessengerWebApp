var express  = require('express')
var socket = require('socket.io')

var app = express()

var server = app.listen(4000)

var io = socket(server)

app.get('/', function(req, res){
    console.log("recieved initial get request")
    res.sendFile(__dirname + "/public/messenger.html")
})

io.on('connection', function(socket){
    console.log("connected to the socket")
})
