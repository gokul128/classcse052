import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { green } from '@mui/material/colors';

const Faq = () => {
    const navigation=useNavigate();
    const handlegeneral=()=>
    {
        navigation('/general');
    }
    const handlecancle=()=>
    {
        navigation('/Cancle');
    }
    const handlePayment=()=>
    {
        navigation('/Payment');
    }
    const handleTicket=()=>
    {
        navigation('/tickets');
    }
  return (

    <div>
        <h1>
            Services 
        </h1>
        <ul style={{listStyle:'none',display:'flex',justifyContent:'space-evenly'}} >
            <li>
        <Button style={{backgroundColor:'green'}} size="large" variant='contained' onClick={handlegeneral }>
            General
        </Button>
            </li>
            <li>
        <Button style={{backgroundColor:'green'}} size="large" variant='contained' onClick={handleTicket}>
            Ticket - reletated
        </Button>
            </li>
            <li>
        <Button style={{backgroundColor:'green'}} size="large" variant='contained' onClick={handlecancle}>
            cancellation & refund
        </Button>
            </li>
            <li>
        <Button  style={{backgroundColor:'green'}} size="large" variant='contained' onClick={handlePayment}>
            Payment
        </Button>
            </li>
        </ul>
    </div>
  )
}

export default Faq