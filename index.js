var rect = require('./rectangle')

function calculateRectangle(l, w) {
    console.log('Calculate rectangle l = ' + l + ' and w = ' + w)
    rect.calc(l, w, (error, rectangle) => {
        if (error != null)
            console.log(error.message)
        else if (rectangle != null) {
            console.log('Perimeter = ' + rectangle.perimeter())
            console.log('Area = ' + rectangle.area())
        }
    })
    console.log('This statement write after the rect fuction call')
}

calculateRectangle(2,3)
calculateRectangle(5,0)
calculateRectangle(8,6)