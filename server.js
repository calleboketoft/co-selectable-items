var port = 3000
var staticDir = './src'

var express = require('express')
var app = express()
app.use(express.static(staticDir))
var server = app.listen(port, function () {
  console.log('Listening at http://%s:%s',
    server.address().address, server.address().port)
})
