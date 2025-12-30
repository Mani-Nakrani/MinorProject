import { Box, Breadcrumbs, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import cimg from "../Assets/images/about2.png";
import { Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import discovermain1 from '../Assets/images/discovermain1.png'
import discovermain2 from '../Assets/images/discovermain2.png'


function handleClick(event) {
  event.preventDefault();
}

const Discovermain = () => {
  return (
    <Box>
            {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: `url(${cimg})`,
          height: { xs: 200, md: 300 },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            fontSize: { xs: 26, md: 40 },
            fontWeight: 650,
            color: "white",
            display: "flex",
            justifyContent: "center",
            pt: { xs: 7, md: 11 },
            wordSpacing: 8,
            textAlign: "center",
          }}
        >
          Service Details Page
        </Box>

        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: 13, md: 16 },
            }}
          >
            <Link component={RouterLink} style={{textDecoration:"none"}} to="/Home">
             <Box sx={{color:"white"}}> Home</Box>
            </Link>
            <Link component={RouterLink} style={{textDecoration:"none"}}  to="/discovermain">
             <Box sx={{color:"white"}}> Service Detail</Box>
            </Link>
          </Breadcrumbs>
        </div>
      </Box>

            <Container>
                <Box sx={{mt:8}}>
                <Box className="row">
                    <Box className="col-12 col-lg-8 col-md-6 col-sm-12">
                        <img src={discovermain1} style={{height:500}}></img>
                        <Box sx={{mt:5}}>
                            <Typography sx={{fontSize:25,fontWeight:600}}>
                                Organic Production
                            </Typography>
                            <Typography sx={{mt:1,color:"#777"}}>
                                We are committed to organic production methods that prioritize the well-being of our planet and your health. Our ingredients are sourced from trusted organic suppliers, ensuring that you enjoy meals that are not only delicious but also environmentally responsible.
                            </Typography>
                            <Box className="row">
                                <Box className="col-12 col-lg-6 col-md-12" sx={{mt:5}}>
                                    <img src={discovermain2}></img>
                                </Box>
                                 <Box className="col-12 col-lg-6 col-md-12" sx={{mt:5}}>
                                 <Typography sx={{color:"#777",mt:6,ml:2}}>Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum Lorem ipsum dolor sit amet, consectetur adipising</Typography>
                                 <Typography sx={{color:"#777",mt:2,ml:2}}>Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ulabore  amet, consectetur adipising</Typography>
                                </Box>
                                <Typography sx={{fontSize:27,fontWeight:600,mt:5}}>Special Occasions to our Restaurant</Typography>
                                <Typography sx={{mt:2,color:"#777"}}>Lorem ipsum dolor sit amet, colit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accums lacus vel facilisis. rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</Typography>
                            </Box>
                        </Box>
                    </Box>


                    <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <Typography sx={{fontSize:26,fontWeight:700}}>All Service</Typography>
                        <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Organic Vegetables
                        </Typography>
                        <Typography>(07)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />

                         <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Fresh Fruits
                        </Typography>
                        <Typography>(05)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />

                         <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Fresh Vegetables
                        </Typography>
                        <Typography>(10)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />

                         <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Our Restaurant
                        </Typography>
                        <Typography>(13)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />

                         <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Special Food
                        </Typography>
                        <Typography>(15)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />

                         <Box sx={{display:"flex",justifyContent:"space-between",mt:2,color:"grey"}}>
                        <Typography sx={{"&:hover":{color:"#CC3333"}}}>
                        <span style={{ color: "#777"}}>»</span>
                        Organic Product
                        </Typography>
                        <Typography>(17)</Typography>
                        </Box>
                        <Divider sx={{ mt: 1, borderColor: "#777" }} />



                         {/* RIGHT CARD */}
                                    <Box
                                      sx={{
                                        height: 'auto',
                                        width: { xs: '100%', sm: 380 },
                                        height: { xs: '100%', sm: 420 },
                                        backgroundColor: 'white',
                                        boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                                        mt: { xs: 6, md: 8 },
                                        ml: { xs: 0},
                                        px: 2,
                                        pb: 3,
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          color: '#CC3333',
                                          fontWeight: 600,
                                          fontSize: 20,
                                          fontFamily: 'Lobster Two, cursive',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          pt:5
                                        }}
                                      >
                                        Opening Times
                                      </Box>
                        
                                      <Typography
                                        sx={{
                                          fontSize: { xs: 24, md: 32 },
                                          fontWeight: 600,
                                          display: 'flex',
                                          justifyContent: 'center',
                                          mt: 0.8,
                                        }}
                                      >
                                        Check Availability
                                      </Typography>
                        
                                      {/* TIME ROWS */}
                                      {[
                                        ['Sunday to Tuesday', '09:00 - 06:00'],
                                        ['Friday to Sunday', '06:00 - 09:00'],
                                        ['Sunday to Tuesday', '09:00 - 06:00'],
                                        ['Monday to Friday', '06:00 - 09:00'],
                                        ['Monday to Saturday', '06:00 - 09:00'],
                                      ].map((item, index) => (
                                        <Box
                                          key={index}
                                          sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            mt: 1,
                                            px: 1,
                                            '&:hover': { borderBottom: '1px dotted #CC3333' },
                                          }}
                                        >
                                          <Box
                                            sx={{
                                              fontSize: 16,
                                              color: 'gray',
                                              '&:hover': { color: '#CC3333' },
                                            }}
                                          >
                                            {item[0]}
                                          </Box>
                                          <Box
                                            sx={{
                                              fontSize: 16,
                                              color: 'gray',
                                              '&:hover': { color: '#CC3333' },
                                            }}
                                          >
                                            {item[1]}
                                          </Box>
                                        </Box>
                                      ))}
                        
                                      <Box
                                        sx={{
                                          fontSize: 20,
                                          fontWeight: 650,
                                          fontFamily: 'Lobster Two, cursive',
                                          mt: 3,
                                          display: 'flex',
                                          justifyContent: 'center',
                                          '&:hover': { color: '#CC3333' },
                                        }}
                                      >
                                        Call Us Now
                                      </Box>
                        
                                      <Box
                                        sx={{
                                          fontSize: 22,
                                          fontWeight: 500,
                                          fontFamily: 'Lobster Two, cursive',
                                          mt: 0.5,
                                          display: 'flex',
                                          justifyContent: 'center',
                                          '&:hover': { color: '#CC3333' },
                                        }}
                                      >
                                        +993240-765230
                                      </Box>
                                    </Box>
                                    <img src={discovermain1} style={{marginTop:47,width:380}}></img>
                    </Box>


                </Box>
            </Box>
            </Container>
    </Box>
  )
}

export default Discovermain
