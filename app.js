const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('TrapLocz said file has not been found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('TrapLocz said something went wrong', error)
    } else {
        console.log('TrapLocz said server is listening on port' + port)
    }
})

// Middleware

// View Engines

// Connect to Database

// Routes

// AUTHENTICATION

// 404 error