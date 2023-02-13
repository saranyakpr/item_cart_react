import React from 'react';
import Product from '../components/Product/Product';
import products from './products.json';
import "./Home.scss"

const Home = () => {

  console.log("products", products);

  return (
    <div className='home-container'>
      {products?.map((product, index)=><Product product={product} key={index} showCart={true}/>)}
    </div>
  )
}

export default Home