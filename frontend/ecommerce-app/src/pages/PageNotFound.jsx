
import { Link } from "react-router-dom"
function PageNotFound(){
    return (
        <>
           <h1>Page Not found</h1>
           <p>please click here to go back</p>
           <Link to="/">Go Back</Link>  
           <br></br>
           {/* <a href="/">Go Back to Homepage</a> */}
         </>
    )
}

export default PageNotFound;