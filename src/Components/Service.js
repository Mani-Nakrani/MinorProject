import { Box, Breadcrumbs, Container, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'
import about2 from "../Assets/images/about2.png";
import service1 from "../Assets/images/service1.png";
import service2 from "../Assets/images/service2.png";
import service3 from "../Assets/images/service3.png";
import service4 from "../Assets/images/service4.png";
import service5 from "../Assets/images/service5.png";
import service6 from "../Assets/images/service6.png";
import service7 from "../Assets/images/service7.png";
import service8 from "../Assets/images/service8.png";
import service9 from "../Assets/images/service9.png";
import service10 from "../Assets/images/service10.png";

function handleClick(event) {
  event.preventDefault();
}

const Service = () => {

  const [showAll, setShowAll] = useState(false);

  const servicecard = [
    { img: service1, title: "Fresh Healthy Food", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service2, title: "Delicious Homemade Dishes", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service3, title: "Gourmet Dining Experience", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service4, title: "Farm-to-Table Freshness", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service5, title: "Mouthwatering Culinary", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service6, title: "Exquisite Dessert Delights", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service7, title: "100% Swiss Quality", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service8, title: "Organic Production", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service9, title: "Food Law Certified", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" },
    { img: service10, title: "Food Production", des: "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore" }
  ];

  const visibleCards = showAll ? servicecard : servicecard.slice(0, 6);

  return (
    <Box>
      {/* Banner */}
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
          Service Page
        </Box>

        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs sx={{ color: "white", display: "flex", justifyContent: "center" }}>
            <Link component={RouterLink} to="/Home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Typography color="white">Service Page</Typography>
          </Breadcrumbs>
        </div>
      </Box>

      {/* Content */}
      <Container>
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: "#CC3333", fontSize: 20, fontFamily: "Lobster Two, cursive" }}>
            Our Service
          </Typography>

          <Typography sx={{ color: "#292929", fontSize: 35, fontWeight: 700 }}>
            What Restaurant Services
          </Typography>
        </Box>

        {/* Cards */}
        <Box className="row" sx={{ mt: 7 }}>
          {visibleCards.map((item, index) => (
            <Box key={index} className="col-12 col-lg-4 col-md-6 col-sm-12">
              <Box sx={{ border: "2px solid #ddd", textAlign: "center", mb: 3 }}>
                <img src={item.img} style={{ height: 60, width: 60, marginTop: 25 }} />
                <Typography sx={{ fontSize: 20, color: "#666666", fontWeight: 600, mt: 2 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 13, mt: 1, color: "#666666" }}>
                  {item.des}
                </Typography>
                <Typography sx={{ mt: 2, color: "#CC3333", mb: 2.5 }}>
                  See More
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* View More / View Less Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#CC3333", px: 4 }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
