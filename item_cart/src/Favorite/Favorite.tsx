import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product/Product';
import './Favorite.scss';

const Favorite = () => {
  const state=useSelector(({sample}:any)=>sample)
  return (
    
    <div className='fav-container'>
    {state?.favorites?.map((product:any ,index:number )=>(
    <Product product={product} key={index} showCart={true}/>
    ))}
    {state?.favorites?.length=== 0 && <div><h1>No Product Found</h1></div>}
    </div>
  )
}

export default Favorite