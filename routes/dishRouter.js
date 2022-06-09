const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

// The dishRouter.route('/') means that by using this approach, we are 
// declaring the end point at one single location. Whereby we can chain
// all get, put, post, delete methods to implement this router
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
        // when you call next(), it means it'll continue on to look for
        // additional specifications down below here, which will match
        // the '/dishes' endpoint
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!')
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' +
            req.body.description + ' for you')
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('PUT operation not supported on /dishes')
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes')
    })

dishRouter.route('/:dishId')    // dishId is the parameter passed in the request
    .get((req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!')
    })

    .post((req, res, next) => {
        res.statusCode = 403
        res.end('POST operation not supported on /dishes/' + req.params.dishId)
    })

    .put((req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n')
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description)
    })

    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishId)
    })


module.exports = dishRouter