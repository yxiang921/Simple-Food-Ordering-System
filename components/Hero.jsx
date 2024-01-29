'use client';
import React, { useContext, useRef, useState } from 'react';

import { Cart, Food } from '.';
import { DataContext } from '@/context/DataContext';

import { HiOutlineShoppingBag } from "react-icons/hi2";

const Hero = () => {
  const { toggle, setToggle , foods, hero } = useContext(DataContext);

  return (
    <div className='hero-container' ref={hero}>

      {toggle && 
        <Cart />
      }
      
      <h1 className='hero-title'>Our Products</h1>
      <div className='hero-food-list'>
        {
          foods.map((food) => {
            return <Food
                      foodID={food.id}
                      foodName={food.name}
                      foodPrice={food.unitPrice}
                      foodImage={food.productImage}
                    />
          })
        }
      </div>

      <div className='hero-toggle-btn'>
        <button onClick={() => {setToggle(true)}}>
          <HiOutlineShoppingBag />
        </button>
      </div>
    </div>
  )
}

export default Hero