/**
 * CALLBACK
 */
// SYNCHRONUS

function addition(one,two,callback){
    const result = one + two;
    callback(result)
}


addition(2,2,function(res){
    console.log(res)
})



/**
 * 
 * CALLBACK WITH TIMER EXAMPLE
 * 
 */

function setTimer(callback,time){
    for(let i = 0; i<=time; i++){
        console.log(i)
    }

    callback()
}

setTimer(()=>{
    console.log("Hey i am timer callback")
},100)

// CALLBACK WITH API EXAMPLE
var xhttp = new XMLHttpRequest();

function httpCall(url,callback){
    return xhttp.onreadystatechange = function(url,callback) {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:

       callback(null,this.response)
       
    }else{
        callback(this.responseURL, null)
    }
};
xhttp.open("GET", "url", true);
xhttp.send();
}

httpCall("http://weather.io/lat=12r32,long=2121",function(err,result){
   if(err){

   }
   console.log(res)
})



------------------------------------------------

function addition(one,two,callback){
    const result = one + two;
    callback(result)
}


function substraction(one,two,callback){
    const result = one - two;
    callback(result)
}



function multiplication(one,two,callback){
    const result = one * two;
    callback(result)
}

// CALLBACK HELL
addition(2,2,(res)=>{
    console.log("addition res",res)

    substraction(res,1,(res)=>{
        console.log("substraction res",res)
        multiplication(res,3,(res)=>{
            console.log("multiplication res",res)
        })
    })
})