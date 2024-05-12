// Problem statement
const _ = require("lodash.clonedeep");
// what is difference between require and import ?

var userOne = {
    name: "prashant",
    age: "29",
    address:{
        billing_address: "mumbai",
        shipping_address:"pune",
        getName: function(){
            console.log(this.name)
        },
        orderDate: new Date()
    }
}

console.log(">>>>> Before Changes <<<<<<")
console.log("userOne",userOne)

var userTwo = _(userOne)
console.log("userTwo", userTwo)

console.log(">>>>> After Changes <<<<<<")
userTwo.name = "Sagar"
userTwo.address.billing_address = "Nasik"


console.log("userOne",userOne)
console.log("userTwo", userTwo)


// underscore / lodash >> deepClone

