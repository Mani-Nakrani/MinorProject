import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import bimg from '../Assets/images/banner1.jpg'
import simg from '../Assets/images/simg.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box
        sx={{
          backgroundImage: `url(${bimg})`,
          minHeight: { xs: "auto", md: 680 },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          py: { xs: 6, md: 0 },
        }}
      >
        <Container>
          <Box className="row">
            {/* LEFT CONTENT */}
            <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
              <Box>
                <Typography
                  sx={{
                    color: "#CC3333",
                    fontWeight: 600,
                    fontSize: { xs: 14, md: 18 },
                    ml: 3,
                    mt: { xs: 2, md: 20 },
                    fontFamily: "Lobster Two, cursive",
                  }}
                >
                  Best In Cafeu
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 26, md: 38 },
                    fontWeight: 600,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    ml: 3,
                    mt: 1,
                  }}
                >
                  Different
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: 26, md: 38 },
                      fontWeight: 600,
                      color: "#CC3333",
                    }}
                  >
                    Spice
                  </Typography>
                  For A
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 26, md: 38 },
                    fontWeight: 600,
                    ml: 3,
                  }}
                >
                  Different Taste
                </Typography>

                <Typography
                  sx={{
                    color: "gray",
                    ml: 3,
                    mt: 1,
                    fontSize: { xs: 14, md: 16 },
                  }}
                >
                 Where great food meets a warm atmosphere. We serve delicious, freshly prepared dishes made with quality ingredients and authentic flavors.
                </Typography>

                <Link to="/gallary">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#CE3D3C",
                      height: 40,
                      width: { xs: 130, md: 150 },
                      mt: 3,
                      ml: 3,
                      fontSize: { xs: 12, md: 14 },
                    }}
                  >
                    View Gallery
                  </Button>
                </Link>
              </Box>
            </Box>

            {/* RIGHT IMAGE */}
            <Box className="col-12 col-lg-6 col-md-12 col-sm-12">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-end" },
                }}
              >
                <Box
                  component="img"
                  src={simg}
                  alt="food"
                  sx={{
                    height: { xs: 300, sm: 400, md: 530 },
                    width: "100%",
                    maxWidth: 535,
                    mt: { xs: 4, md: 10 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home1
