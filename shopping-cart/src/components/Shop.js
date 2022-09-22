import React, {useState} from "react";
import Card from "./Card";
import './Shop.css'

const Shop = (props) => {
    const [cart, setCart] = useState({})
    const items = props.items

    const handleAdd = (qty, id) => {
        console.log('qty:', qty);
        console.log('id:', id);
    }

    return (
        <div className = 'shop-parent'>
            <div className = 'shop-grid'>
                {items.map(item => 
                    <Card qty = {handleAdd} name = {item.name} price = {item.price} url = {item.url} key = {item.id} id = {item.id} />
                )}
            </div>
        </div>
    )
}

export default Shop