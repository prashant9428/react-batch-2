// javascript in a sync lang
//  javascript is a single thread sync language

// node js is async


// javascript has no file system
// You can not perform read and write operation on a file using js
// you can connect to a port 
// webApi  


//------
var a = 10;
 function getName(){
    console.log("Hey I am prashant")
}


// Javascript + V8 +  Libuv + CommonJs  == nodeJs
// libuv is multi thread in nature




// Event LOOP
// Memory Allocation -- function and variable gets memory -- first step
// Execution -- second step
// Hoisting
// Every function creates its own exuction context

var name = "Yogesh";

function getName(){
    console.log(name)  // undefined
    var name = "Sagar"  
    function getResult(a,b){
       const result = a + b;
       console.log(`Hey ${name} you result is ${result}`)
       var name = "prashant"
    }
    getResult(2,2)
}

getName();
// concurency
// yogesh - undefined