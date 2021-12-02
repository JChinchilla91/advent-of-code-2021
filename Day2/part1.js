const fs = require('fs')

input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let xPos = 0;
let yPos = 0;

input.forEach( str => {
    str = str.split(' ');
    str[1] = parseInt(str[1])
    
    if (str[0] == 'forward') {

        xPos += str[1]
    } else {
        if (str[0] == 'down') {
            yPos += str[1]
        } else {
            yPos -= str[1]
        }
    }
})

console.log(yPos * xPos)