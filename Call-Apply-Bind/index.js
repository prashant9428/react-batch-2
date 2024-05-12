// Call Apply Bind


var userOne = {
    name: "prashant",
    battery: 30,
    chargeBattery: function(batteryPercent){
        this.battery = batteryPercent
        console.log(`hey ${this.name} and your battery status is ${this.battery}%`)
    },

    currentBatteryStatus: function(){
        console.log(`hey ${this.name} and your battery status is ${this.battery}%`)
    }
}


// class User{
//     constructor(name,battery){
//         this.name = name
//         this.battery = battery
//     }

//     chargeBattery(){
//         this.battery = 100
//         console.log(`hey ${this.name} and your battery status is ${this.battery}%`)
//     }

//     currentBatteryStatus(){
//         console.log(`hey ${this.name} and your battery status is ${this.battery}%`)
//     }
// }

var userTwo = {
    name: "Sagar",
    battery: 60,
}

// userOne.chargeBattery.apply(userTwo,[100])
// userOne.currentBatteryStatus.apply(userTwo)

userTwo.__proto__ = userOne;

userTwo.currentBatteryStatus()

// const bindStatusResponse = userOne.currentBatteryStatus.bind(userTwo);
// bindStatusResponse()

// const bindChargeResponse = userOne.chargeBattery.bind(userTwo, [80]);
// bindChargeResponse()



// function getName(){
//     console.log("prashant")
// }

// getName()  >>> getName.call()

// !call
// Call is used to call the function and chang the this object , 
// if you have some other parameters you can pass with , seperated value
//! example --
// userOne.currentBatteryStatus.call(userTwo)
// userOne.chargeBattery.apply(userTwo,80)

// !Apply
// Apply is used to call the function and change the (this) object , 
// if you have some other parameters you can pass with []
// userOne.currentBatteryStatus.apply(userTwo)
// userOne.chargeBattery.apply(userTwo,[80,20])

//! Bind
// Bind always return function --> it does not execute as same call and apply