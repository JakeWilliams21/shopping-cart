import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Jeans',
      price: 60,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_131-2451-2394-276_prod1?policy=product-medium'
    },
    {
      id: 1,
      name: 'Dress Shirt',
      price: 80,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_125-2683-3343-100_prod1?policy=product-medium'
    },
    {
      id: 2,
      name: 'Khaki Shorts',
      price: 40,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_128-1967-1223-475_prod1?policy=product-medium'
    },
    {
      id: 3,
      name: 'Black Shorts',
      price: 40,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_128-1967-1223-900_prod1?policy=product-medium'
    },
    {
      id: 4,
      name: 'Polo',
      price: 75,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_120-2937-2090-204_prod1?policy=product-medium'
    },
    {
      id: 5,
      name: 'Hoodie',
      price: 50,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_122-3568-1307-300_prod1?policy=product-medium'
    },
    {
      id: 6,
      name: 'Graphic Tee',
      price: 45,
      url: 'https://img.abercrombie.com/is/image/anf/KIC_123-3645-3181-400_prod1?policy=product-medium'
    },
  ])
  const [cart, setCart] = useState([])



  const handleAdd = (cart) => {
    

    for (let i = 0; i < cart.length; i++) {
      setCart(prevCart => ([
        ...prevCart,
        {
          name: items[cart[i].id].name,
          price: items[cart[i].id].price,
          url: items[cart[i].id].url,
          qty: cart[i].qty,
          id: i + 1
        }
      ]))
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar amount = {cart.length}/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/shop' element = {<Shop add = {handleAdd} items = {items} />} />
          <Route path = '/cart' element = {<Cart cart = {cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
