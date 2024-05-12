// Problem statement

var userOne = {
    name: "prashant",
    age: "29",
    address:{
        billing_address: "mumbai",
        shipping_address:"pune"
    }
}

console.log(">>>>> Before Changes <<<<<<")
console.log("userOne",userOne)

// var userTwo = Object.assign({},userOne);



// console.log(">>>>> After Changes <<<<<<")
// userTwo.name = "Sagar"
// userTwo.address.billing_address = "Nasik"


// console.log("userOne",userOne)
// console.log("userTwo", userTwo)

// Deepcopy -- FIX
// first - convert the object into the string
// second - convert that string back to json

var userTwo = JSON.parse(JSON.stringify(userOne))
console.log("userTwo", userTwo)

console.log(">>>>> After Changes <<<<<<")
userTwo.name = "Sagar"
userTwo.address.billing_address = "Nasik"

console.log("userOne",userOne)
console.log("userTwo", userTwo)
