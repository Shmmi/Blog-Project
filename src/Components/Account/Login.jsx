import React from 'react'
import { useState } from 'react'
import {Box,TextField,Button} from '@mui/material'
import "../../CSS/Login.css"

const signupInitialValues = {
  username: '',
  email:'',
  password:''
}

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    
    const[account,handleAccount]= useState("login")
    const[signup,setSignup] = useState(signupInitialValues)

    const toggleSignup=()=>{
      handleAccount("signup")
    }
    
    const toggleLogin= () =>{
      handleAccount("login")
    }
    const onInputChange = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value})
    }
  return (
    <Box className='box'>
    <img className='img' src={imageURL} alt="login" />
    { account=== "login" ?
    <>
      <TextField id="standard-basic" label="Enter Email" variant="standard" style={{marginBottom:"30px",width:"315px"}}/><br/>
      <TextField id="standard-basic" label="Enter Password" variant="standard" style={{marginBottom:"40px",width:"315px"}}/><br />
      <Button className='btn' variant="contained" style={{marginBottom:"25px",width:"315px",background:"#FB641B"}}>Login</Button>
      <p style={{marginTop:"2px",marginLeft:"140px"}}>OR</p>
      <Button onClick={()=>toggleSignup()} variant='contained' style={{marginTop:"15px",marginLeft:"",width:"315px",background:"#FB641B"}}>CREATE AN ACCOUNT</Button>
      </>
      :
      <>
      <TextField id="standard-basic" onChange={(e)=>onInputChange(e)}  label="Enter Username" name='username' variant="standard" style={{marginBottom:"15px",width:"315px"}}/><br/>
      <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} label="Enter Email" name='email' variant="standard" style={{marginBottom:"15px",width:"315px"}}/><br/>
      <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} label="Enter Password" name='password' variant="standard" style={{marginBottom:"25px",width:"315px"}}/><br />
      <Button variant="contained" style={{marginBottom:"20px",width:"315px",background:"#FB641B"}}>Signup</Button>
      <p style={{marginTop:"2px",marginLeft:"140px"}}>OR</p>
      <Button onClick={()=>toggleLogin()} variant='contained' style={{marginTop:"5px",marginLeft:"",width:"315px",background:"#FB641B"}}>ALREADY HAVE AN ACCOUNT</Button>
      </>
}
    </Box>
  )
}

export default Login
