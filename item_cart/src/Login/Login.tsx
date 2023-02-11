import React, { useState } from 'react'
import { TextField, OutlinedInput,IconButton,InputAdornment,InputLabel,Button } from '@mui/material' 
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {login} from '../redux/slice'
import { useDispatch } from 'react-redux';
import './Login.scss'


const Login = () => {
  const[showPassword,setShowPassword]=useState(false);
  const [userName, setUserName]=useState('');
  const [password, setPassword]=useState('');

  const dispatch=useDispatch();

  const handleClickShowPassword=()=>{
    setShowPassword(!showPassword)
  };
   
  const handleInputChange=(ev:any)=>{
    if(ev.target.name==='username'){
      setUserName(ev.target.value)
    }
    else{
      setPassword(ev.target.value)
    }
  };

  const handleLogin = () =>{
    dispatch(login());
  };
   
  return (
    <div className='main'>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <TextField id="outlined-basic" label="username" variant="outlined" onChange={handleInputChange}/>
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={handleInputChange}
          />
             </FormControl>
             <Button variant="contained" onClick={()=>handleLogin()}>Login</Button>
    </div>
  )
}
 
export default Login