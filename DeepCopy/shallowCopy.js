// Problem statement

var userOne = {
    name: "prashant",
    age: "29"
}

console.log(">>>>> Before Changes <<<<<<")
console.log("userOne",userOne)

// var userTwo = userOne;

// console.log("userTwo", userTwo)

// console.log(">>>>> After Changes <<<<<<")
// userTwo.name = "Sagar"

// Shallow Copy
var userTwo = Object.assign({},userOne);

console.log("userTwo", userTwo)

console.log(">>>>> After Changes <<<<<<")
userTwo.name = "Sagar"


console.log("userOne",userOne)
console.log("userTwo", userTwo)