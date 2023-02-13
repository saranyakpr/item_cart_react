import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product/Product';
import './Cart.scss'

const Cart = () => {
  const state = useSelector(({sample}:any)=>sample);
  return (
       <div className='cart-container'>
        {state?.cartItems?.map((product:any ,index:number )=>(<Product product={product} key={index} showCart={false}/>
        ))}
        {state?.cartItems?.length=== 0 && <div><h1>No Product Found</h1></div>}
      </div>
  )
}

export default Cart