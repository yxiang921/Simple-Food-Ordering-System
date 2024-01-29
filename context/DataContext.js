'use client'

import React, { useRef, useState } from 'react';
import { createContext } from 'react';

import toast, { Toaster } from 'react-hot-toast';

export const DataContext = createContext();

export const DataProvider = ( {children} ) => {
  
  const [toggle, setToggle] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const hero = useRef(null);

  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "MC Burger",
      unitPrice: 16,
      productImage: "/assets/burger.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "Nuggets",
      unitPrice: 12,
      productImage: "/assets/nuggets.jpg",
      quantity: 1
    },
    {
      id: 3,
      name: "US Pizza",
      unitPrice: 16,
      productImage: "/assets/uspizza.jpg",
      quantity: 1
    },
    {
      id: 4,
      name: "Orange Juice",
      unitPrice: 8,
      productImage: "/assets/orange-juice.jpg",
      quantity: 1
    },
    {
      id: 5,
      name: "Ice Lemon Tea",
      unitPrice: 12,
      productImage: "/assets/tea.jpg",
      quantity: 1
    }
  ]);

  const deleteItem = (id) => {
    const newCartItem = cart.filter(item => item.id !== id);
    setCart(newCartItem);

    toast.success("Remove Successful")
  }

  const addItem = (productID, count) => {
    const productToAdd = foods.filter(item => item.id === productID).map((item) => {
                                item.quantity = count;
                                return item;
                              });

    const checkProductExist = cart.find((item) => {
      if(item.id === productID){
        return true;
      }
    });

    if(checkProductExist){
      cart.map((item) => {
        if(item.id === productID){
          item.quantity = count;
          return item;
        }
      });
    }else{
      setCart([...cart, ...productToAdd]);
    }

    toast.success("Product Add Successful")

  }

  const checkOut = () => {

  }
  
  

  return (
    <DataContext.Provider value={({
        foods,
        toggle,
        setToggle,
        cart,
        setCart,
        addItem,
        deleteItem,
        checkOut,
        totalPrice,
        setTotalPrice,
        hero
    })}>
        <div>
          {children}
        </div>
    </DataContext.Provider>
  )
}