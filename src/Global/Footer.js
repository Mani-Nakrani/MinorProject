import { Box, Container, Typography ,Divider} from '@mui/material'
import React from 'react'
import bimg from '../Assets/images/bimg.png'
import logow from '../Assets/images/logow.png'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import i1 from '../Assets/images/1.png'
import i2 from '../Assets/images/2.png'
import i3 from '../Assets/images/3.png'
import i4 from '../Assets/images/4.png'
import i5 from '../Assets/images/5.png'
import i6 from '../Assets/images/6.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{mt:10}}>
        <Box sx={{backgroundImage:`url(${bimg})`,
        height:520,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        }}>

        <Container>
            <Box className="row">
                <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <Box>
                        <img src={logow} style={{marginTop:"40px"}}></img>
                        <Typography sx={{color:"white",mt:2,}}>Lorem ipsum dolor sit consectetur,<br/> ame adipiscing elit, sed do</Typography>
                        <Typography sx={{color:"white",mt:2}}>
                            <AddLocationAltIcon/> 4920 Trails End Road Ft United <br/>States, FL 33311
                        </Typography>
                        <Typography sx={{color:"white",display:"flex",mt:2,gap:2}}><Typography sx={{color:"white",mt:1.3}}><EmailIcon/></Typography>nfo@example.com <br/> test@example.com</Typography>
                        <Typography sx={{color:"white",mt:2,display:"flex",gap:2}}>
                            <Typography sx={{mt:1.2}}><LocalPhoneIcon/></Typography> +123 456 679 123 <br/> +123 456 789 
                        </Typography>
                    </Box>
                </Box>
                <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <Box>
                        <Typography variant='h5' sx={{color:"white",ml:8,mt:5.5,borderBottom:"2px solid white",width:130}}>Quick Links</Typography>
                        <Box sx={{color:"white",ml:10}}>
                            <Box sx={{mt:2,fontSize:20}}>Home</Box>
                            <Box sx={{mt:2,fontSize:20}}>About us</Box>
                            <Box sx={{mt:2,fontSize:20}}>Menu</Box>
                            <Box sx={{mt:2,fontSize:20}}>Contact</Box>
                            <Box sx={{mt:2,fontSize:20}}>services</Box>
                            <Box sx={{mt:2,fontSize:20}}>Reservation</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <Box>
                        <Typography variant='h5' sx={{color:"white",ml:5,mt:5.5,borderBottom:"2px solid white",width:110}}>Instagram</Typography>
                        <Box>
                            <Box sx={{mt:4}}>
                                <img src={i1} style={{height:75,width:60}}></img>
                                <img src={i2} style={{height:75,width:60,marginLeft:10}}></img>
                                <img src={i3} style={{height:75,width:60,marginLeft:10}}></img>
                            </Box>
                           <Box sx={{mt:2}}>
                                <img src={i4} style={{height:75,width:60}}></img>
                                <img src={i5} style={{height:75,width:60,marginLeft:10}}></img>
                                <img src={i6} style={{height:75,width:60,marginLeft:10}}></img>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <Typography variant='h5' sx={{color:"white",ml:5,mt:5.5,borderBottom:"2px solid white",width:110}}>Subscribe</Typography>
                        <Typography sx={{color:"white",mt:3}}>Lorem ipsum dolor si consectetur <br/> adipisicing elit, sed eiusmotempor <br/> incididunt ut labore et</Typography>
                        <Box sx={{color:"white",display:"flex",mt:3,ml:3,gap:3}}>
                            <Box><FacebookIcon/></Box>
                            <Box><TwitterIcon/></Box>
                            <Box><XIcon/></Box>
                            <Box><InstagramIcon/></Box>
                        </Box>
                </Box>
            </Box>
            <Divider sx={{ borderBottomWidth: 2, borderColor: 'grey.500',mt:10 }} />
            <Typography sx={{color:"white",mt:1,display:"flex",justifyContent:"center"}}>© Copyright Cafeu. 2025 All Right Reserved</Typography>
        </Container>
        </Box>
    </Box>
  )
}

export default Footer
