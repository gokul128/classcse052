import React from 'react'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import Button from '@mui/material/Button';
import '../assert/Navbar.css';
import { useNavigate } from 'react-router-dom';

import Fromto from './fromto';
import Faq from './Faq';
// import RoutingCancel from './Routingcancel';

const Navbar = () => {
  const navigation=useNavigate();
  const handleevent = () =>{
   navigation('/Login');
  }
  const handleSubmit = () =>{
    navigation('/signup')
  }
  const handleCancel=()=>
  {
    navigation('/Cancellation');
  }
  return (
    <>
  <div className='st' style={{width:"100%",border:'1px groove blue'}}>
    <div className='navbar__container'>
      <div className='one' style={{border:'1px',paddingLeft:'15px',paddingTop:'12px'}}>
      <DirectionsBusFilledIcon  style={{height:'50px',width:'50px'}}/>
      </div>
        <div className='two'>
       <h1 className='abc' style={{color:"black", textAlign:'left'}}>TRIPGO</h1>
       </div>
       <div className='seperate'>
        <Button variant="contained" style={{height:'45px'}} onClick={handleevent}>Login</Button>
        <Button variant="contained" style={{height:'45px'}} onClick={handleSubmit}>SignUp</Button>
        <AccountCircleSharpIcon style={{height:'45px',width:'50px'}}/>
        </div>
    </div>
  </div>
  <div className='native'>
    <div>
       <Fromto/>
    </div>
    <div>
      <Faq/>
    </div>
    <div>
      <h1>GO! FIND! EXPLORE!</h1>
    </div>
    <div>
      <h3 style={{color:'violet'}}>If you need to cancel ticket.Click here 🥹
      </h3>
      <Button style={{backgroundColor:'red'}} variant='contained' type='submit' onClick={handleCancel}>Cancel Ticket</Button>
    </div>
    </div>
    </>
  )
}
export default Navbar;