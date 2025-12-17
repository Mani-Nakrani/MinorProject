import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import cimg from "../Assets/images/about2.png";
import t1 from "../Assets/images/t1.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BorderBottom } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Teamd1 = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${cimg})`,
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
            Team Details Page
          </Box>

          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ color: "white", display: "flex", justifyContent: "center" }}
            >
              <Link underline="hover" color="inherit" href="/"  component={RouterLink}
    to="/Home" >
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Team Details
              </Link>
            </Breadcrumbs>
          </div>
        </Box>
        <Container>
          <Box className="row" sx={{paddingBottom:10}}>
            <Box className="col-12 col-lg-4 col-md-6">
              <Card sx={{ maxWidth: 345, mt: 15 }}>
                <CardMedia
                  sx={{ height: 320 }}
                  image={t1}
                  title="green iguana"
                />
                <CardContent sx={{ height: 120 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      "&:hover": { color: "#CC3333" },
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Cathy Aenderson
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Chief Executive
                  </Typography>
                </CardContent>
                <hr style={{ width: 200, marginLeft: 70 }}></hr>
              </Card>
            </Box>
            <Box className="col-12 col-lg-8 col-md-6">
                <Box>
                    <Box sx={{color:"#666666",fontWeight:550,mt:16,borderBottom:"3px solid #c33",width:100,fontSize:20}}>About Me</Box>
                    <Typography sx={{color:"gray",mt:1}}>Experienced leader with a passion for innovation and excellence in business management. Driving our team towards success.</Typography>
                </Box>
                    <Box sx={{color:"#666666",fontWeight:550,mt:2,borderBottom:"3px solid #c33",width:130,fontSize:20}} >Working Time</Box>
                <Box sx={{display:"flex",gap:15,mt:2}}>
                    <Box sx={{fontWeight:650}}>Day</Box>
                    <Box sx={{fontWeight:650}}>Time</Box>
                </Box>
                <Box sx={{display:"flex",gap:8}}>
                    <Box>
                        <Box sx={{mt:1}}>SUN</Box>
                        <Box sx={{mt:1}}>THU</Box>
                        <Box sx={{mt:1}}>MON</Box>
                    </Box>
                    <Box>
                        <Box sx={{mt:1}}>11:30AM - 12:30PM</Box>
                        <Box sx={{mt:1}}>12:00AM - 05:00PM</Box>
                        <Box sx={{mt:1}}>02:00AM - 07:30PM</Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{color:"#666666",fontWeight:550,mt:2,borderBottom:"3px solid #c33",width:160,fontSize:20}}>Work Experience</Box>
                      <Box className="row" sx={{mt:2}}>
                        <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                             <Box sx={{fontWeight:650}}>YEAR</Box>
                             <Box sx={{mt:1}}>2007-2022</Box>
                             <Box sx={{mt:1}}>2010-2020</Box>
                        </Box>
                        <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <Box sx={{fontWeight:650}}>DEPARTMENT</Box>
                            <Box sx={{mt:1}}>Civil Engineer</Box>
                            <Box sx={{mt:1}}>Civil Engineer</Box>
                        </Box>
                        <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <Box sx={{fontWeight:650}}>POSITION</Box>
                            <Box sx={{mt:1}}>Senior Designer</Box>
                            <Box sx={{mt:1}}>Senior Designer</Box>
                        </Box>
                        <Box className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <Box sx={{fontWeight:650}}>COMPANY</Box>
                            <Box sx={{mt:1}}>Midtown Group</Box>
                            <Box sx={{mt:1}}>Midtown Group</Box>
                        </Box>
                      </Box>
                </Box>
            </Box>
          </Box>
          <Box sx={{height:250,width:345,backgroundColor:"white",boxShadow:"0px 4px 20px rgba(0,0,0,0.2)",mb:5}}>
                <Box sx={{color:"#666666",fontWeight:550,borderBottom:"3px solid #c33",width:140,fontSize:22,pt:2,display:"flex",justifyContent:"center",ml:12}}>Personal Info</Box>
                <Box sx={{fontSize:18,mt:2,ml:5}}>Phone:	+(123)4567890</Box>
                <Box sx={{fontSize:18,mt:2,ml:5}}>Office:	+(123)4567890</Box>
                <Box sx={{fontSize:18,mt:2,ml:5}}>E-mail:	test@example.com</Box>
                <Box sx={{fontSize:18,mt:2,ml:5}}>Gender: Female</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Teamd1;
