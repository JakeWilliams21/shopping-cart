import React, {useState} from "react";
import './Card.css'

const Card = (props) => {
    return (
        <div className="card-parent">
            <div><img alt = 'jeans' src = 'https://img.abercrombie.com/is/image/anf/KIC_131-2451-2394-276_prod1?policy=product-medium'/></div>
            <div className = 'card-description'>
                <div className = 'card-left'>
                    <h4>Jeans</h4>
                    <p>$75</p>
                </div>
                <div className = 'card-right'>
                    <select name = 'quantity'>
                        <optgroup label = 'Qty'>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </optgroup>
                    </select>
                    <button>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card