import { DataContext } from '@/context/DataContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const CartItem = ({productName, quantity, productImage, unitPrice, productID}) => {

  const {deleteItem} = useContext(DataContext);
  
  return (
    <div className='citem-container'>
      <Image 
        src={productImage}
        width={100}
        height={100}
        alt='Product Name'
        style={{borderRadius:"5px"}}
      />
      <div className='citem-detail'>
        <h2 className='citem-name'>{productName}</h2>
        <p>Quantity: <span>{quantity}</span></p>
        <p>Unit Price: <span>RM {unitPrice}</span></p>
      </div>
      <div className='citem-total-price'>
        <h1>RM {unitPrice * quantity}</h1>
      </div>
      <button className='citem-delete-btn' onClick={() => {deleteItem(productID)}}>X</button>
    </div>
  )
}

export default CartItem