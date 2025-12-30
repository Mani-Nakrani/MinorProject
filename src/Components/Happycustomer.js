import { Box, Container, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
import happycustomer1 from '../Assets/images/happycustomer1.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Happycustomer = () => {
  return (
    <Box>
        <Container sx={{ mt: 8 }}>
  {/* Heading */}
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography
      sx={{
        color: "#CC3333",
        fontSize: 20,
        fontFamily: "Lobster Two, cursive",
      }}
    >
      Happy Customers
    </Typography>

    <Typography
      sx={{
        color: "#292929",
        fontSize: 35,
        fontWeight: 700,
      }}
    >
      Our Guestbook
    </Typography>
  </Box>

  {/* ROW */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // responsive
      alignItems: "center",
      gap: 4,
      mt: 7,
    }}
  >
    {/* LEFT COLUMN (Text) */}
    <Box
      sx={{
        flex: 7, // 70%
        backgroundColor: "#fff",
        p: 4,
        borderLeft: "3px solid #CC3333",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.05)",
      }}
    >
      <Typography sx={{ fontSize: 40, color: "#CC3333" }}>“</Typography>

      <Typography sx={{ fontSize: 35, fontWeight: 700,mt:-2 }}>
        James Smith list <br/>Specifications 2023
      </Typography>

      <Typography sx={{ mt: 2, color: "#777", lineHeight: 1.8,fontSize:15 }}>
        Organizations throughout the World to manage their IT<br></br>
        with our unique approach to technology engagement and<br></br>
        consultancy solutions. Provide users with private view<br></br>
        and access permissions
      </Typography>

      <Typography sx={{ mt: 3, fontWeight: 600 ,fontSize:17}}>
        Jason Samoa <span style={{ color: "#777",fontSize:12 }}>- Regular Customer</span>
      </Typography>
      <Link to="/contactme">
         <Button variant="contained" sx={{mt:2.4,bgcolor:"#CC3333"}}>Give Review</Button>
      </Link>
    </Box>



    {/* RIGHT COLUMN (Image) */}
    <Box
      sx={{
        flex: 5, // 30%
      }}
    >
      <img
        src={happycustomer1}
        alt="customer"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: 450,
          objectFit: "cover",
          borderRadius: 6,
        }}
      />
    </Box>
  </Box>
</Container>

    </Box>
  )
}

export default Happycustomer