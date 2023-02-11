import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({

    name: 'sample',
    initialState: {
        isAuthenticated: false,
        cartItems: [],
        favorites: [],
    },
   
    reducers: {
       login:(state)=>{
        state.isAuthenticated = true;
       },
       logout:(state)=>{
        state.isAuthenticated = false;
       },
       addToCart:(state, action)=>{
        state.cartItems= action.payload;
       },
       addToFav:(state, action)=>{
        state.favorites= action.payload;
       },
    }
});

export const {login, logout, addToCart, addToFav}= slice.actions;

export default slice.reducer;