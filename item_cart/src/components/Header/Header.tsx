import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import StyledInputBase from '@mui/material/InputBase';
import SearchIconWrapper from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import './Header.scss'

const Header = () => {

  const state = useSelector(({sample}:any)=>sample)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate  = useNavigate();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const goToMyFav = () =>{
        handleClose();
        navigate('/favorite')
      }

      const goToMyCart = () =>{
        handleClose();
        navigate('/cart')
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          onClick={()=>navigate('/product')}
          className='name'
        >
          Fruit shop
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}/>
        </Search>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>navigate('/cart')}>
          <Badge badgeContent={state?.cartItems?.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={goToMyCart}>Cart</MenuItem>
                <MenuItem onClick={goToMyFav}>My Favorite</MenuItem>
              </Menu>
            </div>
      </Toolbar>
    </AppBar>
  </Box>
    
  )
}

export default Header