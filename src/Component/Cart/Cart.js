import {useState,useEffect,React} from 'react'
import axios from '../../../node_modules/axios/lib/axios';
import './Cart.css'
import { Link } from 'react-router-dom';


const Cart = () => {
    const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        // Slice the first 4 images from the fetched data
        setImages(res.data);
      })
      .catch(err => {
        console.error('Error fetching data', err);
      });
  }, []);
  console.log('dataaaaaaaaaaaaa',images);
  

  return (
    <div className='image-gallery'>
      {images.map((product, index) => (
        <Link to={`/product/${product.id}`} key={index} className='card-link'>
          <div className="image-card">
            <img src={product.image} alt={product.description} className="card-image" />
            <div className="card-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
          </Link>
      ))}
    </div>
  )
}

export default Cart