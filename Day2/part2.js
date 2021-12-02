const fs = require('fs')

input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let xPos = 0;
let yPos = 0;
let aim = 0;

input.forEach( str => {
    str = str.split(' ');
    str[1] = parseInt(str[1])
    
    if (str[0] == 'forward') {

        xPos += str[1]
        yPos += str[1] * aim
    } else {
        if (str[0] == 'down') {
            aim += str[1]
        } else {
            aim -= str[1]
        }
    }
})

console.log(xPos * yPos)