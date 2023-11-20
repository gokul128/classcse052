import axios from 'axios';
import React, { useState } from 'react'

export default function Deletaxios() {
    const[id,setId]=useState();
    const handleDeleteId=event=>{
        setId(event.target.value)
    }
    const handleSubmitId=event=>{
        event.preventDefalut();
        axios.delete(`http://localhost:3001/user/${id}`)
        .then(res=>{console.log(res.data)})
        .catch(error=>(console.log("Something went wrong"+error)))
    }
    
    return (
    <div>Deletaxios
        <form onSubmit={handleSubmitId}>
            <input type='text' value={id} onChange={handleDeleteId}></input>
            <button type='submit'>delete</button>
        </form>
    </div>
  )
}