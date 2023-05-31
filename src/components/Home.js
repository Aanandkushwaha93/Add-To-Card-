import React from 'react';
import mobile from '../mobile.png';
const Home = (props) => {
    // console.log("Home", props.data.length);
    return (
        <div>
            <h2>Product Detials</h2>
            <div className="card-wrapper">
                <div className="img-wrapper item">
                    <img src={mobile} alt="mobile image" />
                </div>
                <div className="text-wrapper item">
                    <b>
                Brand Name:I-phone 13
                    </b>
                    <br/>
                    <b>
                        Price:$ 79,999
                    </b>
                </div>
                <div className="btn-wrapper item">
                    <button className='add-to-cart' onClick={() =>
                        props.addToCartHandler({ price: 1000, name: "i phone 11" })
                    }>Add To Cart</button><br/>
                    <button className='remove-to-cart' onClick={() =>
                        props.removeToCartHandler({ price: 1000, name: "i phone 11" })
                    }>Remove To Cart</button>
                </div>
            </div>

        </div>

    )
}
export default Home;