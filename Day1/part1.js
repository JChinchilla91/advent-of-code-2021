const fs = require('fs')

input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

input = input.filter((depth, i, arr) => depth < arr[i+1]).length;

console.log(input)