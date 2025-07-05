/* primitive >= call by value
7 types: string, Number, Boolean, null, undefined,
Symbol(use to make value unique), BigInt.
*/

const score = 100
const scoreval = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const nextId = Symbol("123")

console.log(id === nextId)
/* Reference type(Non Primitive)
Array, Objects, Functions.
*/
// array
const heroes = ["Shaktiman","Superman","Padman"]
// Object declaration
let myObj ={
    name: "Sam",
    age: 21,
}
// function declaration
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)