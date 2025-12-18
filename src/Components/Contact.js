import { Box, Container, Typography } from "@mui/material";
import React from "react";
import cimg from "../Assets/images/about2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import map1 from "../Assets/images/map1.jpg";
import map2 from "../Assets/images/map2.jpg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MapIcon from "@mui/icons-material/Map";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

function handleClick(event) {
  event.preventDefault();
}

const Contact = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
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
          Contact Us
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
            <Link underline="hover" color="inherit" component={RouterLink} to="/Home">
              Home
            </Link>
            <Link underline="hover" color="inherit" component={RouterLink} to="/contact">
              Contact Us
            </Link>
          </Breadcrumbs>
        </div>
      </Box>

      <Container>
        {/* MAP + CONTENT */}
        <Box className="row">
          <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={map1}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                  marginTop: 100,
                }}
              />
            </Box>
          </Box>

          <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
            <Typography
              sx={{
                color: "#e6c9a2",
                display: "flex",
                fontWeight: 600,
                mt: { xs: 6, md: 10 },
                gap: 2,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              _____________
              <Typography sx={{ color: "black", fontWeight: 600 }}>
                LOCATION
              </Typography>
              _____________
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 26, md: 38 },
                fontWeight: 600,
                mt: 2,
                display: "flex",
                justifyContent: "center",
                fontFamily: "Audrey",
                wordSpacing: 5,
                textAlign: "center",
              }}
            >
              HOW TO FIND US?
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray", textAlign:"center" }}>
                It is inconvenient to not know the address, below is
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray" }}>
                the address and
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray" }}>
                contact of the Basilico restaurant
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  fontWeight: 600,
                  mt: 2,
                  justifyContent: "center",
                  fontSize: 18.5,
                  fontFamily: "Audrey",
                }}
              >
                CALL US BOOK A TABLE & DELIVERY:
              </Box>

              <Box
                sx={{
                  display: "flex",
                  fontWeight: 500,
                  mt: 1,
                  justifyContent: "center",
                  fontSize: { xs: 26, md: 36 },
                  fontFamily: "Audrey",
                }}
              >
                978-212-8600
              </Box>

              <Box
                sx={{
                  display: "flex",
                  fontWeight: 600,
                  mt: 1,
                  justifyContent: "center",
                  fontSize: 18.5,
                  fontFamily: "Audrey",
                }}
              >
                INFORMATION RESTAURANT
              </Box>

              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray", fontSize: 14 }}>
                Address: 4517 Washington Ave. Manchester, Kentucky
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray", fontSize: 14 }}>
                39495, USA
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray" }}>
                Mail: alexafood123@gmail.com
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", color: "gray" }}>
                Opening Hour: Mon - Fri : 9.00am - 22.00pm:
              </Typography>

              <RouterLink to="/Home" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0E1927",
                    color: "white",
                    height: 40,
                    width: 170,
                    mt: 3,
                    display: "block",
                    mx: "auto",
                  }}
                >
                  Back to home
                </Button>
              </RouterLink>
            </Box>
          </Box>

          <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={map2}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                  marginTop: 100,
                }}
              />
            </Box>
          </Box>
        </Box>

        <br /><br /><br /><br /><br />

        {/* ICON SECTION */}
        <Box>
          <Box className="row">
            <Box className="col col-lg-4 col-md-6 col-sm-12" sx={{ textAlign: "center" }}>
              <Box sx={{
                backgroundColor:"#0e1927",
                height:100,
                width:100,
                borderRadius:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#e6c9a2",
                mx:"auto"
              }}>
                <AddIcCallIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography sx={{ fontSize:23, color:"#0e1927", fontWeight:560, mt:2.3 }}>
                CONTACT US
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15, mt:1.6 }}>
                +(406) 555-0120
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15 }}>
                Basilicofood123@gmail.com
              </Typography>
            </Box>

            <Box className="col col-lg-4 col-md-6 col-sm-12" sx={{ textAlign: "center" }}>
              <Box sx={{
                backgroundColor:"#0e1927",
                height:100,
                width:100,
                borderRadius:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#e6c9a2",
                mx:"auto"
              }}>
                <MapIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography sx={{ fontSize:23, color:"#0e1927", fontWeight:560, mt:2.3 }}>
                ADDRESS HERE
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15, mt:1.6 }}>
                4517 Washington Ave. Manchester,
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15 }}>
                Kentucky 39495, USA
              </Typography>
            </Box>

            <Box className="col col-lg-4 col-md-6 col-sm-12" sx={{ textAlign: "center" }}>
              <Box sx={{
                backgroundColor:"#0e1927",
                height:100,
                width:100,
                borderRadius:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#e6c9a2",
                mx:"auto"
              }}>
                <MoreTimeIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography sx={{ fontSize:23, color:"#0e1927", fontWeight:560, mt:2.3 }}>
                OPEN TIME
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15, mt:1.6 }}>
                Mon - Fri : 9.00am - 22.00pm
              </Typography>
              <Typography sx={{ color:"#666666", fontSize:15 }}>
                Saturday : 11.00 - 23.00 Sunday : close
              </Typography>
            </Box>
          </Box>
        </Box>

        <br /><br />
      </Container>
    </Box>
  );
};

export default Contact;
