import React, {useState} from "react";
import './Card.css'

const Card = (props) => {
    const [qty, setQty] = useState(0)

    const handleClick = (e) => {
        props.qty(qty, props.id)
    }

    const handleChange = (e) => {
        setQty(prevState => (e.target.value))
    }

    return (
        <div className="card-parent">
            <div><img alt = 'jeans' src = {props.url} /></div>
            <div className = 'card-description'>
                <div className = 'card-left'>
                    <h4>{props.name}</h4>
                    <p>${props.price}</p>
                </div>
                <div className = 'card-right'>
                    <select onChange = {handleChange} name = 'quantity'>
                        <optgroup label = 'Qty'>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </optgroup>
                    </select>
                    <button onClick = {handleClick}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card