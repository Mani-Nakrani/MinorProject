import {
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  Button
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Assets/images/logo.png";

const ContactMe = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        {/* Heading */}
          <Typography
            align="center"
            variant="h5"
            sx={{ mb: 1, fontWeight: 600 ,fontSize:20,color:"#CC3333",fontFamily: "Lobster Two, cursive"}}
          >
            Contact Us
          </Typography>
      <Box sx={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:600,mb:1}}>Please Get In Touch With Us</Box>
        <Box sx={{ border: "2px solid #E9E9E9", p: 4 }}>

          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img src={logo} alt="logo" />
          </Box>

          {/* Form */}
          <Grid container spacing={3}>

            {/* Row 1 */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Name *"
                name="name"
                value={form.name}
                onChange={handleChange}
                sx={{width:380}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Email *"
                name="email"
                value={form.email}
                onChange={handleChange}
                sx={{width:380}}

              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Number *"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                sx={{width:380}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Address *"
                name="address"
                value={form.address}
                onChange={handleChange}
                sx={{width:380}}
              />
            </Grid>

            {/* Comment (single full width) */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Comment *"
                multiline
                rows={4}
                name="comment"
                value={form.comment}
                onChange={handleChange}
                sx={{width:783}}
              />
            </Grid>

            {/* Button */}
            <Grid item xs={12}>
  <Box
   
  >
    <Button
      variant="contained"
      sx={{
        px: 4,
        py: 1.5,
        backgroundColor: "#d32f2f",
        "&:hover": {
          backgroundColor: "#b71c1c",
        },
        ml:38   
      }}
    >
      SEND MESSAGE
    </Button>
  </Box>
</Grid>


          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
