/**
 * 
 */


// for(var i = 0; i <=10; i++){
//     // parameter
//    function run(i){
//     setTimeout(()=>{
//         console.log(i)
//     },100)
//    }

//    run(i)
// }

function getName(){
    var name = "prashant"
    function getUserName(){
       console.log(name)
    }
    
    return getUserName
    
   
}

const getUser = getName();

getUser()