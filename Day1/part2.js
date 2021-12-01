const fs = require('fs')

input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

let count = 0;

for (i = 0; i <= input.length; i++) {
    let sum = input[i] + input[i+1] + input[i+2];
    let nextSum = input[i+1] + input[i+2] + input[i+3];

    if (sum < nextSum) {
        count++
    }
}

console.log(count)