

// const additionArrow = (a,b)=> a + b;

// function addition(a,b){
//     return a + b;
// }


// console.log(additionArrow(2,3))
// console.log(addition(2,2))


const a = {
    firstName: "Prashant",
    lastName: "Pathak",
    getName: function(){
       
        //console.log(`${this.firstName} ${this.lastName}`)
    },
    getNameWithArrow: function(){
        return ()=>{
            console.log(this) // global object
            console.log(`${this.firstName} ${this.lastName}`)
        }
    }
}


// a.getName()
const innerFunction = a.getNameWithArrow()
innerFunction()


// new keyword 