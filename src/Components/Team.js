import { Box, Container, Typography } from "@mui/material";
import React from "react";
import t1 from "../Assets/images/t1.png";
import t2 from "../Assets/images/t2.png";
import t3 from "../Assets/images/t3.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            color: "#CC3333",
            fontWeight: 600,
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            mt: 10,
            pt: 8,
            fontFamily: "Lobster Two, cursive",
          }}
        >
          Our Team
        </Typography>
        <Typography
          sx={{
            fontSize: 38,
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            mt: 1,
            mb: 2,
          }}
        >
          Meet Our Team
        </Typography>
        <Box className="row" sx={{ mb: 10 }}>
              <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
                <Card sx={{ maxWidth: 345, mt: 5 }}>
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
                    <Link to={'/Teamd1'} style={{color:"black"}}>
                      Cathy Aenderson
                    </Link>
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
              <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
                <Card sx={{ maxWidth: 345, mt: 5 }}>
                  <CardMedia
                    sx={{ height: 320 }}
                    image={t2}
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
                      <Link to={'/Teamd2'} style={{color:"black"}}>
                          Mike Dooley
                    </Link>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                    Executive
                    </Typography>
                  </CardContent>
                  <hr style={{ width: 200, marginLeft: 70 }}></hr>
                </Card>
              </Box>
              <Box className="col-12 col-lg-4 col-md-6 col-sm-12">
                <Card sx={{ maxWidth: 345, mt: 5 }}>
                  <CardMedia
                    sx={{ height: 320 }}
                    image={t3}
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
                      <Link to={'/Teamd3'} style={{color:"black"}}>
                      Alextina Jimiey
                    </Link>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                    Food Inspector
                    </Typography>
                  </CardContent>
                  <hr style={{ width: 200, marginLeft: 70 }}></hr>
                </Card>
              </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
