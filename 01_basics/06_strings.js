const name = "Sam"
const repo = 25

//console.log(name + repo + " done")

console.log(`Hello my name is ${name} and my repo count is ${repo}`)

const gameName = new String('bat-tle-ground')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))//gets the character at index
console.log(gameName.indexOf('t'))//gives index of the character

const newString = gameName.substring(0,4)
console.log(newString)//prints the substrings

const  anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    sam    "
console.log(newStringOne)
console.log(newStringOne.trim())//trims the spaces

const url = "https://sam.com/saumya%2003raj"
console.log(url.replace('%2003','25'))// replace the given string with required string

console.log(url.includes('sam'))// finds whether the estring are available in the line or not

console.log(gameName.split('-'))//split the whole string on the basis of the given parameter
