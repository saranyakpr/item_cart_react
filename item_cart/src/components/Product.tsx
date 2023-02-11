import React from 'react';
import {Card, CardHeader, IconButton, Avatar, CardMedia, CardContent, CardActions, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import pImg from '../assets/image/fru.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({product}:any) => {
  return(  <Card sx={{ maxWidth: 310, m:3 }}>
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
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton aria-label="share">
    <AddShoppingCartIcon/>
    </IconButton>
    {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
  </CardActions>
</Card>
);
}


export default Product