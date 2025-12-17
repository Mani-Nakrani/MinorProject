import { Box, Container } from "@mui/material";
import React from "react";
import about2 from "../Assets/images/about2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import c2 from "../Assets/images/c2.jpg";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom'


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const About2 = () => {
  return (
    
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${about2})`,
          height: 300,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            fontSize: 40,
            fontWeight: 650,
            color: "white",
            display: "flex",
            justifyContent: "center",
            pt: 11,
            wordSpacing: 8,
          }}
        >
          About Us
        </Box>

        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "white",display :"flex",justifyContent:"center" }}
          >
            <Link underline="hover" color="inherit" component={RouterLink} 
               to="/Home">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              About Us
            </Link>
          </Breadcrumbs>
        </div>
      </Box>
      <Container>
        <Box className="row" sx={{ alignItems: "center" }}>
          <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
            <img
              src={c2}
              style={{
                height: 500,
                width: 500,
                marginTop: "150px",
                marginBottom: 50,
              }}
            ></img>
          </Box>
          <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
            <Box
              sx={{
                color: "#CC3333",
                mt: 10,
                ml: 7,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              About Us
            </Box>
            <Box
              sx={{
                fontSize: 36,
                fontWeight: 650,
                fontFamily: "oswald",
                mt: 2,
                ml: 7,
              }}
            >
              We With The Aspects Food <br /> Professional Services
            </Box>
            <Box sx={{ mt: 1.5, ml: 7 }}>
              it is dolor sit amet consectetur adipisicing elit. Voluptatem
              ratione nisi aspernatur, tempora illo ea inventore repellat ullam
              nobis nulla numquam ipsam ad quibusdam doloribus quia autem
              incidunt dolore, dolorum quisquam eligendi? Deleniti in, aut
              dolores neque magnam veniam earum quaerat? Laboriosam inventore
              dolor.
            </Box>
              
          <RouterLink to="/Home" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#CE3D3C",
                  color: "white",
                  height: 40,
                  width: 150,
                  mt: 5,
                  ml: 7,
                }}
              >
                Back To home
              </Button>
            </RouterLink>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default About2;
