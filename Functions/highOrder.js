// const arr = [1,2,3,4,5]

// arr.forEach((item)=>{
//    console.log(item)
// })

// callback function  -> highOrder function

// console.log("a")

// setTimeout(()=>{
//     console.log(10)
// })

// console.log("b")

// MOST IMP -- Question

for(var i = 0; i <=10; i++){
    // parameter
   function run(i){
    setTimeout(()=>{
        console.log(i)
    },100)
   }

   run(i)
}


