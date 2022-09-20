import React, {useState} from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className = 'home-div'>
            <div className = 'model-image'>
                <h3>Now in Season</h3>
                <Link path = '/shop' style = {{textDecoration: 'none', color: 'white'}}><button className = 'shop-button'>Shop Now</button></Link>
            </div>
        </div>
    )
}

export default Home