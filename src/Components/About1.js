import { Box, Container, Typography } from "@mui/material";
import React from "react";
import buffet from "../Assets/images/buffet.png";
import online from "../Assets/images/online.png";
import Button from "@mui/material/Button";
import m1 from "../Assets/images/m1.jpg";
import { Link } from "react-router-dom";

const About1 = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container>
        <Box className="row">
          {/* LEFT IMAGE */}
          <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={m1}
                alt="about"
                sx={{
                  mt: { xs: 5, md: 12 },
                  mb: { xs: 5, md: 12 },
                  width: "100%",
                  maxWidth: 550,
                  height: { xs: "auto", md: 580 },
                }}
              />
            </Box>
          </Box>

          {/* RIGHT CONTENT */}
          <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
            <Typography
              sx={{
                color: "#CC3333",
                mt: { xs: 2, md: 17 },
                ml: { xs: 0, md: 7 },
                fontSize: { xs: 16, md: 20 },
                fontWeight: 600,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 26, md: 38 },
                fontWeight: 600,
                ml: { xs: 0, md: 7 },
                mt: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Why We Are The Best
            </Typography>

            <Typography
              sx={{
                color: "gray",
                ml: { xs: 0, md: 7 },
                mt: 1,
                wordSpacing: 1,
                mb: 2,
                fontSize: { xs: 14, md: 16 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
              qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quvoluptas nulla pariatureaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>

            {/* BUFFET */}
            <Box className="row">
              <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={buffet}
                    alt="buffet"
                    sx={{
                      height: 55,
                      width: 55,
                      p: 1,
                      mt: 4,
                      backgroundColor: "#f1e9e9ff",
                      mr: 12,
                    }}
                  />
                </Box>
              </Box>

              <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    mt: 3,
                    ml: { xs: 0, md: -16 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Buffet Service
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    ml: { xs: 0, md: -16 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Qariatureaque ipsa quae a illo inventore
                  <br /> veritatis et quasi architecto
                </Typography>
              </Box>
            </Box>

            {/* ONLINE */}
            <Box className="row">
              <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={online}
                    alt="online"
                    sx={{
                      height: 55,
                      width: 55,
                      p: 1,
                      mt: 4,
                      backgroundColor: "#f1e9e9ff",
                      mr: 12,
                    }}
                  />
                </Box>
              </Box>

              <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    mt: 3,
                    ml: { xs: 0, md: -16 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Online Booking
                </Typography>

                <Typography
                  sx={{
                    color: "gray",
                    ml: { xs: 0, md: -16 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Qariatureaque ipsa quae a illo inventore
                  <br /> veritatis et quasi architecto
                </Typography>

                <Link to="/about2">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#CE3D3C",
                      height: 40,
                      width: 130,
                      mt: 4,
                      ml:-29 ,
                      textTransform: "none",
                      textDecoration: "none", 
                    }}
                  >
                    Read More
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About1;
