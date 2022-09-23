import React, {useState} from "react";
import './CartItem.css'

const CartItem = (props) => {
    return (
        <div className = 'item-parent'>
            <div className = 'item-left'>
                <img className = 'item-image' alt = 'item' src = {props.url}/>
            </div>
            <div className = 'item-right'>
            <h4>{props.name}</h4>
            <p>${props.price}</p>
            <p>Qty: {parseInt(props.qty)}</p>
            <p>Total: {props.price * props.qty}</p>
            </div>
        </div>
    )
}

export default CartItem