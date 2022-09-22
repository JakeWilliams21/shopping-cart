import React, {useState} from "react";
import './CartItem.css'

const CartItem = (props) => {
    return (
        <div className = 'item-parent'>
            <div className = 'item-left'>
                <img className = 'item-image' alt = 'item' src = 'https://img.abercrombie.com/is/image/anf/KIC_131-2451-2394-276_prod1?policy=product-medium'/>
            </div>
            <div className = 'item-right'>
            <h4>Jeans</h4>
            <p>$60</p>
            <p>Qty: 3</p>
            <p>Total: 180</p>
            </div>
        </div>
    )
}

export default CartItem