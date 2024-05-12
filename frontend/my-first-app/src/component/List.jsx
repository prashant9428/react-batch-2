
function List({userData}){
    console.log("listData",userData)
    return(
        <ul>
             {userData.map((item,index)=> <li key={index}>{item}</li>)}
        </ul>
    )
}

export default List;