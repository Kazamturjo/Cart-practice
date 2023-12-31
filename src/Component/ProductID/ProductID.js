import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';

const ProductID = () => {
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  console.log('id from url',id);
  
  const [current, setCurrent] = useState([]);
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#161616',
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setCurrent(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data', err);
      });
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      setCart(savedCartItems === null ? [] : savedCartItems);
  }, [id]);
  console.log('datatttt',current);
  console.log('dwasdasf',cart);
  

  const addToCart = (current) => {
   setCart((prev=>{
    const newCart = [...prev,current]
    localStorage.setItem('cartItems', JSON.stringify(newCart)); 
    return newCart
   }))
  };
  
  


  return (
    <>
      {/* <div className="btn-add-container">
        <Link to="/products" className="back-button">
          &larr;<span>Back to all products</span>
        </Link>

        <Link to="/cart" className="Goto-button">
          <span>Go to cart →</span>
        </Link>
      </div> */}
      {current ? (
        <div className="ID-container">
          <div className="">
            <img
              src={current.image}
              style={{ width: '300px', margin: '20px' }}
              alt=""
            />
            <div className="host-van-detail-info-text">
              <i>{current.category}</i>
            </div>
          </div>
          <nav className="detail-nav">
            {/* <NavLink
              to={`/${id}/details`} // Update with your desired path
              isActive={(match, location) => location.pathname.includes('details')}
              style={activeStyles}
            >
              Details
            </NavLink> */}
            {/* <NavLink
              to={`/${id}/pricing`} // Update with your desired path
              isActive={(match, location) => location.pathname.includes('pricing')}
              style={activeStyles}
            >
              Pricing
            </NavLink> */}
          </nav>

          <div>
            <button onClick={() => addToCart(current)} className="add-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default ProductID;
