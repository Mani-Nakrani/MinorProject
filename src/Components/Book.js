import { Box, Container, Typography , TextField } from "@mui/material";
import React from "react";
import bookimg from "../Assets/images/bookimg1.png";
import bookback from "../Assets/images/bookback.png";
import barr1 from "../Assets/images/barr1.png"
import barr2 from "../Assets/images/barr2.png"
import logo from '../Assets/images/logo.png';
import Button from '@mui/material/Button';

const Book = () => {
  return (
    <Box>
      <Container>
        <Box sx={{backgroundImage:`url(${bookback})`,height:550,backgroundSize:"cover",backgroundRepeat:"no-repeat",mt:10}}>
        <Box sx={{pt:5}}>
            <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 35
          }}
        >
          <img src={bookimg}></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: 38,
            fontFamily: "initial",
            mt: 1,
          }}
        >
          Make A Reservation
        </Box>
       
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#666666",
            mt: 1,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aspernatur ipsa veritatis
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", color: "#666666" }}
        >
          consectetur minima quasi eius ipsa aspernatur adipisicing elit
          veritatis
        </Box>
        </Box>
        
       <Box sx={{display:"flex",justifyContent:"space-around",mt:8}}>
         <Box
          sx={{
            border: "5px dashed #E5D7C2",
            borderRadius: 50,
            width: 100,
            height: 100,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
             fontFamily: "initial",
             fontSize:38
          }}
        >
          01
        </Box>
        <Box sx={{fontSize:22,fontWeight:600,fontFamily: "initial",mt:14,ml:-22}}>BOOKING</Box>
         <Box sx={{mt:10}}><img src={barr1}></img></Box>
         <Box
          sx={{
            border: "5px dashed #E5D7C2",
            borderRadius: 50,
            width: 100,
            height: 100,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
             fontFamily: "initial",
             fontSize:38,
             mt:10
          }}
        >
          02
        </Box>
        <Box sx={{fontSize:22,fontWeight:600,fontFamily: "initial",mt:24,ml:-23}}>GIVE YOUR</Box>
        <Box sx={{fontSize:22,fontWeight:600,fontFamily: "initial",mt:28,ml:-23}}>DETAILS</Box>
        <Box sx={{mt:4}}><img src={barr2}></img></Box>
         <Box
          sx={{
            border: "5px dashed #E5D7C2",
            borderRadius: 50,
            width: 100,
            height: 100,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
             fontFamily: "initial",
             fontSize:38
          }}
        >
          03
        </Box>
        <Box sx={{fontSize:22,fontWeight:600,fontFamily: "initial",mt:14,ml:-25}}>CONFIRMATION</Box>
       </Box>
        </Box>

          <Box sx={{display:"flex",justifyContent:"center",mt:10}}>
        <Box sx={{height:750,width:750,border:"2px solid #E9E9E9"}}>
         <div className="logo">
              <img src={logo} style={{marginLeft:270,marginTop:20,marginBottom:50}}/>
            </div>
            <Box sx={{display:"flex",justifyContent:"center",gap:7}}>
             <Box>
           <Typography sx={{fontSize:19}}>First Name</Typography>
           <TextField label="Enter Your First Name" variant="outlined" sx={{width:320}}/>
           </Box>
           <Box>
           <Typography sx={{fontSize:19}}>Last Name</Typography>
           <TextField label="Enter Your Last Name" variant="outlined" sx={{width:320}}/>
           </Box>
        </Box>

             <Box sx={{display:"flex",justifyContent:"center",gap:7,mt:5}}>
             <Box>
           <Typography sx={{fontSize:19}}>Email</Typography>
           <TextField label="Enter Your Email" variant="outlined" sx={{width:320}}/>
           </Box>
           <Box>
           <Typography sx={{fontSize:19}}>Contact</Typography>
           <TextField label="Enter Your Phone Number" variant="outlined" sx={{width:320}}/>
           </Box>
        </Box>

           <Box sx={{display:"flex",justifyContent:"center",gap:7,mt:5}}>
             <Box>
           <Typography sx={{fontSize:19}}>Date</Typography>
           <TextField label="DD/MM/YY" variant="filled" sx={{width:320}}/>
           </Box>
           <Box>
           <Typography sx={{fontSize:19}}>Time</Typography>
           <TextField label="_ _:_ _:_ _" variant="outlined" sx={{width:320}}/>
           </Box>
        </Box>

           <Box sx={{display:"flex",justifyContent:"center",gap:7,mt:5}}>
             <Box>
           <Typography sx={{fontSize:19}}>How Many People Are Coming ?</Typography>
           <TextField label="How Many People Are Coming ?" variant="filled" sx={{width:693,mt:2}}/>
           </Box>
        </Box>

           <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Button variant="contained" sx={{backgroundColor:"#CC3333",color:"#FFFFFF",height:45,width:190,ml:3.2,mt:5}}>Book A Table</Button>
           </Box>
        </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Book;
