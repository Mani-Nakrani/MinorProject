import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import bimg from '../Assets/images/banner1.jpg'
import simg from '../Assets/images/simg.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <Box>
        <Box sx={{backgroundImage:`url(${bimg})`,height:680,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <Container>
                <Box className='row'>
                    <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                        <Box>
                             <Typography sx={{color:"#CC3333",fontWeight:600,fontSize:18,ml:3,mt:20,fontFamily:"Lobster Two, cursive"}}>Best In Cafeu</Typography>
                             <Typography sx={{fontSize:38,fontWeight:600,display:"flex", gap:1.2,ml:3,mt:1}}>Different <Typography sx={{fontSize:38,fontWeight:600,color:"#CC3333"}}>Spice</Typography> For A <br/></Typography>
                             <Typography sx={{fontSize:38,fontWeight:600,ml:3}}>Different Taste</Typography>
                             <Typography sx={{color:"gray",ml:3,mt:1}}>Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod <br/> tempor incididunt ut labore et dolore magna aliqua Quis</Typography>
                             
                              <Link to={'/gallery'}>
                                        <Button variant="contained"  sx={{backgroundColor:"#CE3D3C",color:"white",height:40,width:150,mt:3,ml:3}}>View Gallery</Button>
                              </Link>

                        </Box>
                    </Box>
                    <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                        <img src={simg} style={{height:530,width:535,marginTop:"80px"}}></img>
                    </Box>
                </Box>
            </Container> 
        </Box>
    </Box>
  )
}

export default Home1