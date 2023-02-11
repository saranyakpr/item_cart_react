import React from 'react';
import Product from '../components/Product';
import products from './products.json';
import "./Home.scss"

const Home = () => {

  console.log("products", products);

  return (
    <div className='home-container'>
      {products?.map((product, index)=><Product product={product}/>)}
    </div>
  )
}

export default Home