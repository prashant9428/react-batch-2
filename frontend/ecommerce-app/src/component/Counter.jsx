
import { useState } from "react"

function Counter() {
   // let count = 1;
    let [count, setCount] = useState(0) // useState takes a default value
    /**
     * count is the variable
     * setCount is the function to update the value of count
     * useState takes a default value of count
     */


    function increaseCount() {
        let newCount = count + 1;
        setCount(newCount);
    }

    console.log("count", count)
    return (
        <>
            <h1>counter : {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
        </>

    )
}


export default Counter