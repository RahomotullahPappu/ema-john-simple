import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  // const cart = props.cart;  //option 1
  // const {cart} = props;     //option 2

// console.log(cart);

let totalprice = 0;
let totalShipping = 0;
for(const product of cart){
  totalprice = totalprice + product.price
  totalShipping = totalShipping + product.shipping;
}

const tax = totalprice*7/100;
const grandTotal = totalprice + totalShipping + tax;


  return (
    <div className='cart'>
        <h4>Order Summery</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalprice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;