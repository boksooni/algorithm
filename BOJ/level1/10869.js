//A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
