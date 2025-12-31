import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";
import logo from "../Assets/images/logo.png";

const AddProduct = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 560,
          padding: 4,
          borderRadius: 2,
        }}
      >
        {/* Logo / Title */}
       <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 3,
  }}
>
  <Box
    component="img"
    src={logo}
    alt="logo"
    sx={{
      height: 45,
      width: 130,
      objectFit: "contain",
    }}
  />
</Box>


        {/* Title */}
        <TextField
          fullWidth
          label="Title"
          required
          margin="normal"
        />

        {/* Description */}
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={3}
          margin="normal"
        />

        {/* Price */}
        <TextField
          fullWidth
          label="Price"
          required
          margin="normal"
        />

        {/* Upload Image */}
        <Button
  fullWidth
  variant="outlined"
  component="label"
  sx={{
    mt: 2,
    py: 1.2,
    borderColor: "#000",
    color: "#000",
  }}
>
  UPLOAD IMAGE
  <input
    type="file"
    hidden
    accept="image/*"
  />
</Button>

        {/* Add Product */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.3,
            backgroundColor: "#d32f2f",
            "&:hover": {
              backgroundColor: "#b71c1c",
            },
          }}
        >
          ADD PRODUCT
        </Button>
      </Paper>
    </Box>
  );
};

export default AddProduct;
