function addition(one, two) {
    return new Promise((resolve, reject) => {
        if (!one || !two) {
            reject("please pass one and two")
        }

        resolve(one + two)
    })
}

function substraction(one, two) {
    return new Promise((resolve, reject) => {
        if (!one || !two) {
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

function allSettled(){
    return Promise.allSettled([addition(2,3), substraction(23), multiplication(2,2)]).then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

function getName(){
  return "prashant"
}
async function calculation() {
    try {
        const additionRes = await addition(2, 2);
        console.log("additionRes", additionRes)
        const substractionRes = await substraction(additionRes,1);
        console.log("substractionRes", substractionRes)
        const multiplicationRes = await multiplication(substractionRes, 2)
        console.log("multiplicationRes", multiplicationRes)
       const name =  getName()
       console.log("name",name)
       // await allSettled()
    } catch (error) {
        console.log("Error", error)
    }
}

calculation()