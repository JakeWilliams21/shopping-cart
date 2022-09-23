import React, {useState} from "react";
import './Cart.css'
import CartItem from "./CartItem";

const Cart = (props) => {
    
    let totalqty = 0
    let total = 0

    for (let i = 0; i < props.cart.length; i++) {
        totalqty = totalqty + parseInt(props.cart[i].qty)
        total = total + (props.cart[i].qty * props.cart[i].price)
    }
    
    let tax = total * .03


    return (
        <div className = 'cart-parent'>
            <div className = 'cart-left'>
                {props.cart.map(item => 
                <CartItem name = {item.name} url = {item.url} price = {item.price} qty = {item.qty} key = {Math.random()} />
                )}
            </div>
            <div className = 'cart-right'>
                <div className = 'calculation'>
                    <div>
                        <p>Items ({totalqty})</p>
                        <p>${total}</p>
                    </div>
                    <div>
                        <p>Shipping:</p>
                        <p>$11.00</p>
                    </div>
                    <div>
                        <p>Estimated Tax</p>
                        <p>${tax.toFixed(2)}</p>
                    </div>
                </div>
                <div className = 'total'>
                    <h4>Order Total:</h4>
                    <h4>${total + tax + 11}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cart