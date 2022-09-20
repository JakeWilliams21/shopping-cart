import React, {useState} from "react";
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [cart, setCart] = useState(0)

    return (
        <div>
            <div className = 'nav-parent'>
                <div className = 'left-nav'>
                    <Link style = {{color: 'black', textDecoration: 'none'}} to = '/'><h2>Abercrombie & Fitch</h2></Link>
                    <ul>
                        <Link to = '/' style = {{color: 'black', textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to = '/shop' style = {{color: 'black', textDecoration: 'none'}}><li>Shop</li></Link>
                    </ul>
                </div>
                <div className = 'right-nav'>
                    <p style = {{visibility: cart === 0 ? 'hidden' : 'visible'}} >{cart}</p>
                    <Link style = {{color: 'black', textDecoration: 'none'}} to = '/cart'><ShoppingCartIcon /></Link>
                </div>
            </div>
            <div className = 'promo'>
                <p>Limited Time: Up to 25% Off Select Styles | Free Shipping on Orders Over $99</p>
                <ul>
                    <li>See Details</li>
                    <li>Shop Men's</li>
                    <li>Shop Women's</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar