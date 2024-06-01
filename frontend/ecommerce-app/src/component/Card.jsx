import Button from '@mui/material/Button';

function Card(props) {
    //console.log(props);
    return (
        <>
            <div className="card-container">

                <div className="card">
                    <div className="imageSection">
                        <img src={props.image}></img>
                    </div>
                    <div className="cardDetails">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <h2>₹ {props.price}</h2>
                        <Button variant="outlined" size="medium" className='ButtonCss' color='secondary'>Add to cart</Button> 
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card;