// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)

/*the reason is that an equality check == ans
comparison >,<, >=, <= work differently.
comparison converts null to a number, treating it
as 0. that's why (2) >= 0 is true (1) null > 0 is false.
*/

// ===  >= strict check, checks data as well as data types.

console.log("2" == 2)
console.log("2" === 2)