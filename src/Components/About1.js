import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import about from '../Assets/images/b1.jpeg'
import buffet from '../Assets/images/buffet.png'
import online from '../Assets/images/online.png'
import Button from '@mui/material/Button';
import m1 from '../Assets/images/m1.jpg'
import { Link } from 'react-router-dom'

const About1 = () => {
  return (
    <Box>
        <Container>
            <Box className='row'>
                <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                    <img src={m1} style={{marginTop:"100px",marginBottom:"100px",height:580,width:550}}></img>
                </Box>
                <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                    <Typography sx={{color:"#CC3333",mt:17,ml:7,fontSize:20,fontWeight:600}}>About Us</Typography>
                    <Typography sx={{fontSize:38,fontWeight:600,ml:7,mt:1}}>Why We Are The Best</Typography>
                    <Typography sx={{color:"gray",ml:7,mt:1,wordSpacing:1,mb:2}}>Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil
                                molestiae consequatur, vel illum qui<br/> dolorem eum fugiat quvoluptas nulla
                                pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.</Typography>
                    <Box className='row'>
                        <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                            <img src={buffet} style={{height:55,width:55,padding:10,marginLeft:55,backgroundColor:"#f1e9e9ff",marginTop:"35px"}}></img>
                        </Box>
                        <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                            <Typography sx={{fontSize:18,fontWeight:600,mt:3,ml:-16}}>Buffet Service</Typography>
                            <Typography sx={{color:"gray",ml:-16}}>Qariatureaque ipsa quae a illo inventore
                                       <br/> veritatis et quasi architecto</Typography>
                        </Box>
                    </Box>
                    <Box className='row'>
                        <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                            <img src={online} style={{height:55,width:55,padding:10,marginLeft:55,backgroundColor:"#f1e9e9ff",marginTop:"35px"}} ></img>
                        </Box>
                        <Box className='col-12 col-lg-6 col-md-12 col-sm-12'>
                             <Typography sx={{fontSize:18,fontWeight:600,mt:3,ml:-16}}>Online Booking</Typography>
                            <Typography sx={{color:"gray",ml:-16}}>Qariatureaque ipsa quae a illo inventore
                                       <br/> veritatis et quasi architecto</Typography>
                        <Link to={'/about2'}>
                             <Button variant="contained"  sx={{backgroundColor:"#CE3D3C",color:"white",height:40,width:130,mt:5,ml:-30}}>Read More</Button>
                        </Link>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default About1