// Stack(Primitive) -> we get copy
//Heap(Non-Primitive) -> we get original reference

let myYoutubename = " Saumyarajdotcom"

let anothername = myYoutubename
anothername = "javascript"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@ggogle.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "sam@google.com"

console.log(userOne.email)
console.log(userTwo.email)