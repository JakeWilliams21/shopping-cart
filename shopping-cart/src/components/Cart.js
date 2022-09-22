import React, {useState} from "react";
import './Cart.css'
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className = 'cart-parent'>
            <div className = 'cart-left'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className = 'cart-right'>
                <div className = 'calculation'>
                    <div>
                        <p>Items (3)</p>
                        <p>$180.00</p>
                    </div>
                    <div>
                        <p>Shipping & Handling:</p>
                        <p>$11.00</p>
                    </div>
                    <div>
                        <p>Estimated Tax</p>
                        <p>$6.25</p>
                    </div>
                </div>
                <div className = 'total'>
                    <h4>Order Total:</h4>
                    <h4>$190.00</h4>
                </div>
            </div>
        </div>
    )
}

export default Cart