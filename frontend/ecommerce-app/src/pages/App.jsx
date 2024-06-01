import Navbar from "../component/Navbar"
import Card from "../component/Card"
import Counter from "../component/Counter"
import "../style/index.css"
import {useState , useEffect } from "react"
import Sheamer from "../component/Sheamer"

function App() {

  // ! state variables
  const [originalProduct, setOriginalProduct] = useState(null); // !30 products
  const [product, setProduct] = useState(null); // !dynamic  products array
  const [search, setSearch] = useState(null);
  const [buttonClicked, setButtonClicked] = useState("");
 
  // ! api call function
  async function apiCall(){
    const response = await fetch("https://dummyjson.com/products");
    const result =  await response.json();
    console.log("result",result.products)
    setOriginalProduct(result.products)
    setProduct(result.products)
  }
 //! this function will be used to get the input feild data
  function onSearchFeildChange(e){
  //if(e.target.value.length >= 5){
      setSearch(e.target.value)
   //} 
  }

  // ! this function will be used to get the search button click
  function onSearchClick(e){
    console.log("search data", search)
    const cloneProductData = [...originalProduct];  // clone
    console.log("cloneProductData", cloneProductData)
    const filterData = cloneProductData.filter((item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase());
    }); 
    setProduct(filterData); //! 2 products
  }

  // ! on filter change
  const onFilterClick = (e)=>{
   const cloneProductData = [...originalProduct];  // !orignal state of product
   setButtonClicked(e.target.getAttribute("type")); //! this will set the clicked button state
   
   if(e.target.getAttribute("type") == 'highToLow'){
     cloneProductData.sort((a,b)=>{
       return b.price - a.price;
     })
     setProduct(cloneProductData);
   }else if(e.target.getAttribute("type") == 'lowToHigh'){
    cloneProductData.sort((a,b)=>{
      return a.price - b.price;
    })
    setProduct(cloneProductData);
   }else{
    setProduct(originalProduct);
   }
  }
  useEffect(() => {
    apiCall();
  }, [])

  return !product ? <Sheamer/>:(
    <>
      
      <Navbar></Navbar>

      <div className="filterOption">
        <div className="filter">
          <span type="highToLow" onClick={onFilterClick} className={buttonClicked == "highToLow" ? "enable" : "disable" }>High to low</span>
          <span type="lowToHigh" onClick={onFilterClick} className={buttonClicked == "lowToHigh" ? "enable" : "disable" }>low to high</span>
          <span type="clear" onClick={onFilterClick} className={buttonClicked == "clear" ? "enable" : "disable" } >clear</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" onChange={onSearchFeildChange} value={search ? search : ""}/>
          <button onClick={onSearchClick}>Search</button>
        </div>

      </div>

      <div className="product">
        {product?.map((product, index) => {
          return (
            <Card title={product.title} description={product.description} price={product.price} image={product.thumbnail} key={index}></Card>
          )
        })}
      </div>

      {/* <Counter></Counter> */}
    </>
  )
}

export default App
