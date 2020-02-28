var express  = require('express')
var socket = require('socket.io')

var app = express()

var server = socket(app)

