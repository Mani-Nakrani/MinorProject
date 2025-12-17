import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../Assets/images/logo.png';


const Login = () => {

     const[user,setuser]=useState({
    email:"",
    password:""
  })

  function handleChange(e){
    const {name,value}=e.target;
    setuser({...user,[name]:value})
  }  

  const navigate=useNavigate()

  function handleSubmit(){
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0oIrrNsSybd7xwTMdzXhPU79wuXXUeBQ',user)
    .then((res)=>{
      sessionStorage.setItem("token",res.data.idToken)
      setuser(res.data)
      navigate('/Home')
    })                                                                           
  }

  return (
    <Box>
      <Container>
        <Box>
        <Box sx={{height:500,width:550,border:"2px solid #E9E9E9",ml:38,mt:14}}>
         <div className="logo">
              <img src={logo} style={{marginLeft:200,marginTop:35}}/>
            </div>
        


         <Box sx={{mt:5,ml:4}}>
           <Typography sx={{fontSize:19,color:"#444444"}}>Email address*</Typography>
           <TextField label="Enter Your Email" variant="outlined" sx={{width:482}} name="email" value={user.email} onChange={handleChange}/>
           </Box>

         <Box sx={{mt:5,ml:4}}>
           <Typography sx={{fontSize:19,color:"#444444"}}>Password*</Typography>
           <TextField label="Password" variant="outlined" sx={{width:482}} name="password" value={user.password} onChange={handleChange}/>
           </Box>
          

         {/* <Box sx={{display:"flex",justifyContent:"space-between",mt:4}}>
            <FormControlLabel
                              control={<Checkbox sx={{ color: "#7A7A7A", ml: 4 }} />}
                              label="Remember Me"
                              sx={{ color: "#7A7A7A"}}
                            />
           </Box> */}


           <Box sx={{display:"flex",justifyContent:"space-between",mt:2}}>
            <Button variant="contained" sx={{backgroundColor:"#CC3333",color:"#FFFFFF",height:50,width:110,ml:4,mt:2}} onClick={handleSubmit}>Login</Button>
           <Link to={'/reg'} style={{textDecoration:"none"}}>
            <Typography sx={{mr:3.2,mt:4,fontSize:18,color:"#777777",letterSpacing:1}}>Signup ?</Typography>
           </Link>
           </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Login