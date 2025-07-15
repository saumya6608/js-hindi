// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025,6,15,16,4) // calender month starts from 0
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
//let myCreatedDate = new Date("2025-07-15")//YYYY-MM-DD

let myCreatedDate = new Date("15-07-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))//time in seconds

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(` Today's date is ${console.log(newDate.getFullYear())}`)

newDate.toLocaleString('dafault',{
    weekday: "long"
})