import { Box, Container, Typography} from '@mui/material'
import React from 'react'
import sbimg from '../Assets/images/sbimg.png'

const Available = () => {
  return (
    <Box sx={{backgroundImage:`url(${sbimg})`,mt:15,height:350,backgroundSize:"cover",backgroundRepeat:"no-repeat",mb:30}}>
        <Box sx={{backgroundColor:"rgba(0, 0, 0, 0.49)",height:350}}>
            <Container>
                <Box sx={{display:"flex"}}>
                    <Box>
                        <Box sx={{color:"white",fontSize:38,fontWeight:600,pt:13,ml:2}}>We Have Excellent Of Quality <br/> Chinese Food</Box>
                        <Box sx={{color:"white",mt:1,ml:2}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br/>
                                    do eiusmod tempor incididunt ut labore et dolore</Box>
                    </Box>
                    <Box sx={{height:460,width:350,backgroundColor:"white",boxShadow:"0px 4px 20px rgba(0,0,0,0.2)",mt:10,ml:25}}>
                        <Box sx={{color:"#CC3333",fontWeight:600,fontSize:20,fontFamily:"Lobster Two, cursive",display:"flex",justifyContent:"center",mt:4}}>Opening Times</Box>
                         <Typography sx={{fontSize:32,fontWeight:600,display:"flex",justifyContent:"center",mt:0.8}}>Check Availability</Typography>
                         <Box sx={{display:"flex",justifyContent:"space-between",mt:4,'&:hover':{borderBottom:"1px dotted #CC3333"}}}>
                            <Box sx={{fontSize:18,color:"gray",ml:3,'&:hover':{color:"#CC3333"}}}>Sunday to Tuesday</Box>
                            <Box sx={{fontSize:18,color:"gray",mr:3,'&:hover':{color:"#CC3333"}}}>09:00 - 06:00</Box>
                         </Box>
                         <Box sx={{display:"flex",justifyContent:"space-between",mt:1,'&:hover':{borderBottom:"1px dotted #CC3333"}}}>
                            <Box sx={{fontSize:18,color:"gray",ml:3,'&:hover':{color:"#CC3333"}}}>Friday to Sunday</Box>
                            <Box sx={{fontSize:18,color:"gray",mr:3,'&:hover':{color:"#CC3333"}}}>06:00 - 09:00</Box>
                         </Box>
                         <Box sx={{display:"flex",justifyContent:"space-between",mt:1,'&:hover':{borderBottom:"1px dotted #CC3333"}}}>
                            <Box sx={{fontSize:18,color:"gray",ml:3,'&:hover':{color:"#CC3333"}}}>Sunday to Tuesday</Box>
                            <Box sx={{fontSize:18,color:"gray",mr:3,'&:hover':{color:"#CC3333"}}}>09:00 - 06:00</Box>
                         </Box>
                         <Box sx={{display:"flex",justifyContent:"space-between",mt:1,'&:hover':{borderBottom:"1px dotted #CC3333"}}}>
                            <Box sx={{fontSize:18,color:"gray",ml:3,'&:hover':{color:"#CC3333"}}}>Monday to Friday</Box>
                            <Box sx={{fontSize:18,color:"gray",mr:3,'&:hover':{color:"#CC3333"}}}>06:00 - 09:00</Box>
                         </Box>
                         <Box sx={{display:"flex",justifyContent:"space-between",mt:1,'&:hover':{borderBottom:"1px dotted #CC3333"}}}>
                            <Box sx={{fontSize:18,color:"gray",ml:3,'&:hover':{color:"#CC3333"}}}>Monday to Saturday</Box>
                            <Box sx={{fontSize:18,color:"gray",mr:3,'&:hover':{color:"#CC3333"}}}>06:00 - 09:00</Box>
                         </Box>
                        <Box sx={{fontSize:20,fontWeight:650,fontFamily:"Lobster Two, cursive",mt:3,display:"flex",justifyContent:"center",'&:hover':{color:"#CC3333"}}}>Call Us Now</Box>
                        <Box sx={{fontSize:22,fontWeight:500,fontFamily:"Lobster Two, cursive",mt:0.5,display:"flex",justifyContent:"center",'&:hover':{color:"#CC3333"}}}>+993240-765230</Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    </Box>
  )
}

export default Available