const express = require('express')

const serveStatic = require('serve-Static')

const path = require('path')

// Create the express app
const app = express()

// Create the middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/public') ) )

// Serve index by default
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)

// Log to feedback that this is actually running
console.log('Server started on port ' + port)