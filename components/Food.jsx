"use client";

import { DataContext } from '@/context/DataContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';


const Food = ( {foodID, foodName, foodPrice, foodImage} ) => {

  const {addItem} = useContext(DataContext);

  const [count, setCount] = useState(1);

  const counterPlus = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const counterMinus = () => {
    if(count > 1){
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className='food-container'>
      <div className='food-pic'>
        <Image 
          src={foodImage}
          width={130}
          height={130}
          alt='Food Name'
          style={{borderRadius:'10px'}}
        />
      </div>
      <div className='food-detail'>
        <h3>{foodName}</h3>
        <div className="counter">
          <button onClick={counterMinus}>-</button>
          <span className='counter-label'>{count}</span>
          <button onClick={counterPlus}>+</button>
        </div>
        <p className='food-price'>RM {foodPrice}</p>
        <button className='btn addcart-btn' onClick={() => {addItem(foodID, count)}}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Food