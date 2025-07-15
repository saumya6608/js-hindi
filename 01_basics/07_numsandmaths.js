const score = 400
// console.log(score)

const balance = new Number(2121)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(3))//fixed to the given value after decimal

const otherNumber = 123.34536
// console.log(otherNumber.toPrecision(4))//round off to the given number of integer

const hundreds = 1000000
// console.log(hundreds.toLocaleString())//give the comma according to the US standards in amount
// console.log(hundreds.toLocaleString('en-IN'))//give the comma according to the indian standards in amount

//++++++++++++++++++++++++++MATHS++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))//gives the absolute value
// console.log(Math.round(4.6))//gives the round off value
// console.log(Math.ceil(4.2))//gives the ceil value- upper level
// console.log(Math.floor(4.9))//gives the floor value- lower level

// console.log(Math.min(4,3,5,6,7,1,0,9,))//gives minimum value
// console.log(Math.max(4,3,5,6,7,1,0,9,))//gives the maximum value

console.log(Math.random())//gives random value and value always lies between 0 -> 1.
console.log(Math.random() * 10)
console.log(Math.random() * 10 + 1)
console .log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)