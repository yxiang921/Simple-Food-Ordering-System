"use client"

import { DataContext } from '@/context/DataContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const Banner = () => {

  const { hero } = useContext(DataContext);

  return (
    <div className='banner-container'>
      <div className='banner-text'>
        <h1 className='banner-title'>30% Off</h1>
        <span className='banner-subtitle'>Enjoy Summer Discount Now</span>
        <button className='btn banner-btn' onClick={() => {hero.current.scrollIntoView()}}>Explore</button>
      </div>
      <div className='banner-image'>
        <Image 
          src={"/assets/banner-burger.png"}
          width={250}
          height={250}
          alt='banner bg pic'
        />
      </div>
    </div>
  )
}

export default Banner