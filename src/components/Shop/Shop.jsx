import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>

      <div className='cart-container'>
        <h4>Order Summery</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $</p>
        <p>Total Shoping Charge: $</p>
        <p>Tax: $</p>
        
        <div className='cart-container-btn'>
         <button>Clear cart</button>
        <button>Review</button>
         </div>
      </div>

    </div>
  );
};

export default Shop;