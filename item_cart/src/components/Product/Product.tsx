import React from 'react';
import {Card, CardHeader, IconButton, Avatar, CardMedia, CardContent, CardActions, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import pImg from '../../assets/image/fru.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, addToFav} from "../../redux/slice";
import './Product.scss';


const Product = ({product,showCart}:any) => {
const state = useSelector(({sample}:any)=>sample);
const dispatch = useDispatch();   

const favorite = () =>{
  const isExist = state.favorites.find(({id}:any)=>id === product.id);

  if(isExist){
    const filtered = state.favorites.filter(({id}:any)=>id !== product.id);
    dispatch(addToFav(filtered))
  }
  else{
    const temp = [...state.favorites];
    dispatch(addToFav([...state.favorites, product]))
  }

};

const addProdToCart =()=>{
  const isExist = state.cartItems.find(({id}:any)=>id === product.id);

  if(isExist){
    const temp = state.cartItems.map((prod:any)=>{
      if(prod.id === product.id){
        return{
          ...prod,
          qty:prod.qty +1
        }
      }else return prod;
    });
    dispatch(addToCart(temp));
  }
  else{
    dispatch(addToCart([...state.cartItems,{...product,qty:1}]));
  }

}

  return(  <Card sx={{ maxWidth: 310, m:3 }} className='prod-container'>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
        S
      </Avatar>
    }
    // action={
    //   <IconButton aria-label="settings">
    //     <MoreVertIcon />
    //   </IconButton>
    // }
    title={product.name}
    subheader="September 14, 2016"
  />
  <CardMedia
    component="img"
    height="194"
    image={pImg}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
        {product.description}
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites" onClick={()=>favorite()}
     className={state.favorites?.some(({id}:any)=> id === product.id)? "fav": ""} >
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    {showCart&&(
    <IconButton aria-label="cart" onClick={()=>addProdToCart()}>
    <AddShoppingCartIcon/>
    </IconButton>
    )}
  </CardActions>
</Card>
);
}


export default Product