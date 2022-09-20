import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/shop' element = {<Shop />} />
          <Route path = '/cart' element = {<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
