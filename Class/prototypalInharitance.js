// ! prototypal inheritance in javascript
//var arr = [1,2]  // ---> inhariting ARRAY class

// ARRAY
// ! size --> lenght of an array
// __proto__ ==> is an object that contains all the function from the parent object/class

var userOne = {
    name : "prashant",
    battery: 60,
    chargeBattery: function(){
        this.battery = 100;
    },
    getStatus: function(){
        console.log(`Hey ${this.name} your battery is ${this.battery} %`)
    }
}

/**
 * user two should use all the function user one
 * user two wants to inharit the properties/ function of userOne
 */

var userTwo = {
    name : "sagar",
    battery: 30,
}

// userTwo.__proto__ = userOne

userTwo = Object.assign(userOne,userTwo)

userTwo.getStatus()
userTwo.chargeBattery()
userTwo.getStatus()


// ! size --> lenght of an array

// __proto__ >>> return an object -> but said as prototype
Array.prototype.size = function(){
    return this.length;
}


var arr = [1,2,3,4,4,5]  // ---> inhariting ARRAY class

console.log(arr.size())

// Prototypal Inharitance