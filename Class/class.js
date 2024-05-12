// ! Class In Javascript

class User {
   constructor(name,battery){
     this.name = name
     this.battery = battery
   }

   chargeBattery(){
     this.battery = 100;
   }

   getBatteryStatus(){
    console.log(`Hey ${this.name} your battery is ${this.battery} %`)
   }
}


class UserOne extends User{
    constructor(name,battery){
        super(name,battery)
    }
}


// module.exports = new Counter() // single ton design patter --> one instance of a class

/**
 * getUser   ==>  counter.incre()
 * getProfile ==> 
 */


// execution context -- varibale function
// var let and const
// function and arrow function
// callback, promise , async await --> promise.all promise.allSettled promise.race
// clousre
// call apply bind
// javascript object >> reusing the function --> prototypal inharitance
// class
// shallow copy and deepcopy


// const arr = [1,2,3,4,5,6,7,7]
// of >> gives the values
// in >>  gives index
// for(let i in arr){
//     console.log(i)
// }

// arr.map((item,index)=>{

// })

