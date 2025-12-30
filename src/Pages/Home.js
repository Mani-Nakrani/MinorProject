import { Box } from '@mui/material'
import React from 'react'
import Home1 from '../Components/Home1'
import About1 from '../Components/About1'
import Gallery1 from '../Components/Gallery1'
import Available from '../Components/Available'
import Team from '../Components/Team'
import Discover from '../Components/Discover'
import Happycustomer from '../Components/Happycustomer'

const Home = () => {
  return (
    <Box>
      <Home1/>
      <Discover/>
      <About1/>
      <Gallery1/>
      <Available/>
      <Team/>
      <Happycustomer/>
    </Box>
  )
}

export default Home