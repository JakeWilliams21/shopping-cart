import React, {useState, useEffect} from "react";
import Card from "./Card";
import './Shop.css'

const Shop = (props) => {
    const [cart, setCart] = useState([])
    const items = props.items

    const handleAdd = (qty, id) => {
        let newItem = {
            id: id,
            qty: qty
        }

        setCart(prevCart => ([...prevCart, newItem]))

    }

    useEffect(() => {
        props.add(cart)
        console.log(cart);
    }, [cart])

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