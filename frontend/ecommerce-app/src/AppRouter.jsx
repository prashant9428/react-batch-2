import {Routes, Route} from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";


function AppRouter(){
    return(
      <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/" element={<App></App>}></Route>
            {/* <Route path="/product/:id/:handle" element={<Product></Product>}></Route> */}
            <Route path="/:product/:category/" element={<Product></Product>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    )
}


export default AppRouter;