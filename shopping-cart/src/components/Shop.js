import React, {useState} from "react";
import Card from "./Card";
import './Shop.css'

const Shop = (props) => {
    return (
        <div className = 'shop-parent'>
            <div className = 'shop-grid'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Shop