import { Box } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../components/Navbar'

const Home = () => {
  return (
    <Box backgroundColor={'#274A37'} height={'100vh'} >
         <WithSubnavigation/>
    </Box>
  )
}

export default Home