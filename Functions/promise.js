

function addition(one, two) {
    return new Promise((resolve,reject) => {
       if(!one || !two){
        reject("please pass one and two")
       }

       resolve(one+two)
    })
}

function substraction(one, two) {
    return new Promise((resolve,reject) => {
        if(!one || !two){
            reject("please pass one and two")
        }
        const result = one - two;
        resolve(result)
    })
}

function multiplication(one, two) {
    return new Promise((resolve) => {
        const result = one * two;
        resolve(result)
    })
}


// resolve goes inside >>  then => return success response
// reject goes inside >>   catch return error response
// if then block return someting  it return promise

addition(2, 2).then((res) => {
        console.log("addition result",res)
        substraction(res,1).then((res)=>{
            console.log("substraction result",res)
        })
    })




// promise chaining

addition(2,2).then(res=> substraction(res)).then(res=> multiplication(res,2))
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log("err",err)
})


// when you wan to run all the promises together
Promise.all([addition(2,3), substraction(23), multiplication(2,2)]).then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

// Failure condition

Promise.allSettled([addition(2,3), substraction(23), multiplication(2,2)]).then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

//Promise.race