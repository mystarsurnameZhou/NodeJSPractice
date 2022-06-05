var rect = require('./rectangle')

function calculateRectangle(l, w) {
    console.log('Rectangle with length=' + l + ' and width=' + w + ' :')
    if (l <= 0 || w <= 0)
        console.log('Invalid size')
    else {
        console.log('Perimeter: ' + rect.perimeter(l,w))
        console.log('Area: ' + rect.area(l,w))
    }
}

calculateRectangle(2,3)
calculateRectangle(5,0)
calculateRectangle(8,6)