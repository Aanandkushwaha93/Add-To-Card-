import React from 'react';
import addtocart from '../addtocart.png';
const Header = (props) => {
    console.log("Header", props.data.length)
    return (
        <div>
            <div className="add-to-cart">
                <b>{props.data.length}</b>
                <img src={addtocart} alt="add to cart icon" />
            </div>
        </div>

    )
}
export default Header;