import List from "./component/List";


function App() {
 const names = ["prashant","sagar","yogesh","Dhanashree","Priyanka"];

 // ! return statement will always have jsx
 // ! props are when you are passing     properties from one componet to another component
 // ! props are passed in attributes
    return (
       <>
          <List userData={names}/>
       </>
    )
}

// common js --> module.exports = App
// module --->  export default App
// export const name = prahant

export default App;