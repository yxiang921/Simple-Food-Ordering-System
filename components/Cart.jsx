"use client";

import React, { useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '@/context/DataContext';
import { CartItem } from '.';

const Cart = () => {

  const { setToggle, cart , checkOut, totalPrice, setTotalPrice} = useContext(DataContext);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += (item.unitPrice * item.quantity);
    })
    setTotalPrice(total);
  }, cart);

  return (
    <>
      <div className='cart-overlay'></div>
      <div className='cart-container'>
        <div className='cart-text'>
          <button onClick={() => setToggle(false)}>x</button>
          <h1>My Orders <span>{cart.length} Items</span></h1>
        </div>

        <div className='cart-items'>
          {cart.map((item) => {
            return <CartItem
                    productID={item.id} 
                    productName={item.name}
                    quantity={item.quantity}
                    unitPrice={item.unitPrice}
                    productImage={item.productImage}
                  />
          })}
        </div>
        <div className='cart-total-price'>
          <h2>Total: <span>RM {totalPrice}</span></h2>
        </div>
        <button className='btn cart-btn' onClick={checkOut}>Check Out</button>
      </div>
    </>
  )
}

export default Cart