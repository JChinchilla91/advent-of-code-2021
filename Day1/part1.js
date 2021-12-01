const fs = require('fs');

input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

let count = 0;

input.forEach((num, i) => {
    if (input[i+1] > num) { 
        count++ 
    }
})

console.log(count);