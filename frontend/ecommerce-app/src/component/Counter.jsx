
import { useState, useEffect } from "react"

function Counter() {
    let [countOne, setCountOne] = useState(0); // useState takes a default value
    let [countTwo, setCountTwo] = useState(0); // useState takes a default value
    // let [product, setProduct] = useState({});

    /**
     * count is the variable
     * setCount is the function to update the value of count
     * useState takes a default value of count
     */

    async function apiCall() {
        const response = {
            name: "iPhone",
            price: 1000
        }
        setProduct(response)
    }

    console.log("i am counter component")

    function increaseCountOne() {
        setCountOne(countOne + 1)
    }

    function increaseCountTwo() {
        setCountTwo(countTwo + 1)
    }

    /**
     * ! it will call for first time when application render
     * ! it  will call when countOne (state variable) changes
     */
    useEffect(() => {
        console.log("I am useEffect with no dependency array")
      //  apiCall()
    },[countOne])

    console.log("countOne", countOne)
    console.log("countTwo", countTwo)
    return (
        <>
            <h1>counterOne : {countOne}</h1>
            <h1>counterTwo : {countTwo}</h1>
            {/* <h1>product : {product.name}</h1> */}
            <button onClick={increaseCountOne}>Increase Count</button>
            <button onClick={increaseCountTwo}>Increase Count</button>
        </>

    )
}


export default Counter