// ! currying function
// ! prototypal inheritance in javascript
// ! Class In Javascript

// ! interview questions

// Bind -- Closure
/**
 *  ! currying is a technique in JavaScript that allows you to transform functions with multiple arguments 
 *  ! into a sequence of functions,
 *  ! each taking one argument at a time.
 */

var userOne = {
    name : "prashant",
    battery: 60,
    chargeBattery: function(x,y){
        this.battery = x+y;
    },
    getStatus: function(){
        console.log(`Hey ${this.name} your battery is ${this.battery} %`)
    }
}


var userTwo = {
    name : "sagar",
    battery: 30,
}

// currying function
const chargeBatteryBindResponse = userOne.chargeBattery.bind(userTwo,40); // return function
chargeBatteryBindResponse(30) // x,y

const statusBindRes = userOne.getStatus.bind(userTwo); // return function
statusBindRes()



function addition(x){
  return function(y){
    console.log(x+y)
  }
}

const additionRes = addition(5)
additionRes(5)