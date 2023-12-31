import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import ProductID from './Component/ProductID/ProductID';
import { useState } from 'react';
import CartShop from './Component/CarTShop/CartShop';

function App() {
  const [cart,setCart]=useState([])
  const [cartCount,setCartCount]=useState(0)

  const updateCount = (count)=>{
    setCartCount(count)
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>

        <Route path='product/:id' element={<ProductID cart={cart} setCart={setCart}/>}/>
        <Route path='cart' element={<CartShop updateCount={updateCount}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
