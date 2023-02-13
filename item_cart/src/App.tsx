import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import  Home  from './Home/Home';
import Login from './Login/Login';
import Favorite from './Favorite/Favorite';
import Cart from './Cart/Cart';
import { Provider } from "react-redux";
import {store} from './redux/store';
import {useSelector} from 'react-redux';
import Header from './components/Header/Header';

function Routing(){
  const state = useSelector(({sample}:any)=>sample);
  console.log('state', state);

  return(
   <Router>
         {state.isAuthenticated ?  (
          <>
          <Header/>
          <div className='content'>
          <Routes>
              <Route path='/'  element={<Home/>}></Route>
              <Route path='/favorite'  element={<Favorite/>}></Route>
              <Route path='/cart'  element={<Cart/>}></Route>
              <Route path='*'  element={<Navigate to='/'/>}></Route>
          </Routes>
          </div>
          </>
          ):( 
          <Routes>
            <Route path='/login'  element={<Login/>}></Route>
            <Route path='*'  element={<Navigate to='/login'/>}></Route>
          </Routes>)
          }
    </Router>
);
}


function App() {
  return (
     <Provider store={store}>
        <Routing/>
     </Provider>
  );
}

export default App;
