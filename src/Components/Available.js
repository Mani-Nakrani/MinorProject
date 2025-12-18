import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import sbimg from '../Assets/images/sbimg.png'

const Available = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${sbimg})`,
        mt: { xs: 8, md: 15 },
        height: { xs: 'auto', md: 350 },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        mb: { xs: 10, md: 30 },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.49)',
          height: { xs: 'auto', md: 350 },
          pb: { xs: 5, md: 0 },
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            {/* LEFT CONTENT */}
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box
                sx={{
                  color: 'white',
                  fontSize: { xs: 26, sm: 32, md: 38 },
                  fontWeight: 600,
                  pt: { xs: 6, md: 13 },
                  ml: { xs: 0, md: 2 },
                  mt:-30,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                We Have Excellent Of Quality <br /> Chinese Food
              </Box>

              <Box
                sx={{
                  color: 'white',
                  mt: 1,
                  ml: { xs: 0, md: 2 },
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: 14, md: 16 },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />
                do eiusmod tempor incididunt ut labore et dolore
              </Box>
            </Box>
        

            {/* RIGHT CARD */}
            <Box
              sx={{
                height: 'auto',
                width: { xs: '100%', sm: 350 },
                backgroundColor: 'white',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                mt: { xs: 6, md: 10 },
                ml: { xs: 0, md: 25 },
                px: 2,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  color: '#CC3333',
                  fontWeight: 600,
                  fontSize: 20,
                  fontFamily: 'Lobster Two, cursive',
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 4,
                }}
              >
                Opening Times
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 24, md: 32 },
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 0.8,
                }}
              >
                Check Availability
              </Typography>

              {/* TIME ROWS */}
              {[
                ['Sunday to Tuesday', '09:00 - 06:00'],
                ['Friday to Sunday', '06:00 - 09:00'],
                ['Sunday to Tuesday', '09:00 - 06:00'],
                ['Monday to Friday', '06:00 - 09:00'],
                ['Monday to Saturday', '06:00 - 09:00'],
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 1,
                    px: 1,
                    '&:hover': { borderBottom: '1px dotted #CC3333' },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: 16,
                      color: 'gray',
                      '&:hover': { color: '#CC3333' },
                    }}
                  >
                    {item[0]}
                  </Box>
                  <Box
                    sx={{
                      fontSize: 16,
                      color: 'gray',
                      '&:hover': { color: '#CC3333' },
                    }}
                  >
                    {item[1]}
                  </Box>
                </Box>
              ))}

              <Box
                sx={{
                  fontSize: 20,
                  fontWeight: 650,
                  fontFamily: 'Lobster Two, cursive',
                  mt: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  '&:hover': { color: '#CC3333' },
                }}
              >
                Call Us Now
              </Box>

              <Box
                sx={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Lobster Two, cursive',
                  mt: 0.5,
                  display: 'flex',
                  justifyContent: 'center',
                  '&:hover': { color: '#CC3333' },
                }}
              >
                +993240-765230
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Available
