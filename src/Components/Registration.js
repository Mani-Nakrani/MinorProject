import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Assets/images/logo.png";

const Registration = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
    regionstate: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit() {
    // basic validation
    if (!user.email || !user.password) {
      alert("Email and password are required");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0oIrrNsSybd7xwTMdzXhPU79wuXXUeBQ",
        {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        sessionStorage.setItem("token", res.data.idToken);
        navigate("/log");
      })
      .catch((err) => {
        console.error("Firebase Error:", err.response?.data || err.message);
        alert(err.response?.data?.error?.message || "Signup failed");
      });
  }

  return (
    <Box>
      <Container>
        <Box>
          <Box
            sx={{
              height: 820,
              width: 750,
              border: "2px solid #E9E9E9",
              ml: 25,
              mt: 10,
            }}
          >
            <div className="logo">
              <img
                src={logo}
                style={{ marginLeft: 270, marginTop: 35 }}
                alt="logo"
              />
            </div>

            {/* First + Last name */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 7, mt: 5 }}>
              <Box>
                <Typography sx={{ fontSize: 19 }}>First Name*</Typography>
                <TextField
                  label="Enter Your First Name"
                  variant="outlined"
                  sx={{ width: 320 }}
                  name="firstname"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Last Name*</Typography>
                <TextField
                  label="Enter Your Last Name"
                  variant="outlined"
                  sx={{ width: 320 }}
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            {/* Email + Password */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 7, mt: 5 }}>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Email*</Typography>
                <TextField
                  label="Enter Your Email"
                  variant="outlined"
                  sx={{ width: 320 }}
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Password*</Typography>
                <TextField
                  type="password"
                  label="Enter Your password"
                  variant="outlined"
                  sx={{ width: 320 }}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            {/* Address */}
            <Box sx={{ mt: 5, ml: 3.3 }}>
              <Typography sx={{ fontSize: 19 }}>Address*</Typography>
              <TextField
                label="Address"
                variant="outlined"
                sx={{ width: 693 }}
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </Box>

            {/* City + Post Code */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 7, mt: 5 }}>
              <Box>
                <Typography sx={{ fontSize: 19 }}>City*</Typography>
                <TextField
                  label="City"
                  variant="filled"
                  sx={{ width: 320 }}
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Post Code*</Typography>
                <TextField
                  label="Post Code"
                  variant="outlined"
                  sx={{ width: 320 }}
                  name="postcode"
                  value={user.postcode}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            {/* Country + Region */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 7, mt: 5 }}>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Country*</Typography>
                <TextField
                  label="Country"
                  variant="filled"
                  sx={{ width: 320 }}
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 19 }}>Region State*</Typography>
                <TextField
                  label="Region State"
                  variant="filled"
                  sx={{ width: 320 }}
                  name="regionstate"
                  value={user.regionstate}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            {/* Signup button + login link */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F53E32",
                  color: "#FFFFFF",
                  height: 45,
                  width: 130,
                  ml: 3.2,
                  mt: 5,
                }}
                onClick={handleSubmit}
              >
                Signup
              </Button>
              <Link to={"/log"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mr: 3.2,
                    mt: 5,
                    fontSize: 18,
                    color: "#777777",
                    letterSpacing: 1,
                  }}
                >
                  Have an account ?
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;
