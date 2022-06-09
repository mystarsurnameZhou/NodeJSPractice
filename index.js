// Develop a web server that exports a REST API. Using the Express framework,
//and the Express router to implement the server
//1. Use application routes in the Express framework to support REST API
//2. Use the Express Router in Express framework to support REST API

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const http = require('http')

const dishRouter = require('./routes/dishRouter')

const hostname = 'localhost'
const port = 3000

const app = express();  //this means our application is going to use
//the Express application exported from Express
//node module

// this Express application use these middleware
app.use(morgan('dev'))      // allow to log the request to the console
app.use(bodyParser.json()) // allow to parse the body of the request message,
                           // which is formatted in JSON format

app.use('/dishes', dishRouter)
// mount the router at an endpoint
// this means any requests come to the '/dishes' endpoint will be sent
// over to this router and will be handled by this

app.use(express.static(__dirname + '/public')) // serves the static files in public folder

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})