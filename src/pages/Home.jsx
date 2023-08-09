import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../components/Navbar'

const Home = () => {
  return (
    <Box backgroundColor={'#274A37'} height={'100vh'} >
         <WithSubnavigation/>
         <Grid gridTemplateColumns={{base:'1fr',lg:'10% 44% 44%'}}>
          <GridItem>

          </GridItem>
          <GridItem >
            <Image src="./doorpattern.webp" alt="Shivam Enterprise Door pattern" width={'auto'} height={'600px'} margin={'auto'} />
          </GridItem>
          <GridItem >
               <Grid gridTemplateRows={'250px 100px 250px'}>
                <GridItem  className='SpaceGrotesk'>
                  <Box  width={'100%'} marginTop={'45px'} >
                  <Text as={'h1'} fontSize={'70px'} lineHeight={'70px'} textAlign={'left'} fontWeight={'bold'} color={'white'}  >BRINGING BEAUTY AND SECURITY TO YOUR SPACES</Text>
                  </Box>
                </GridItem>
                <GridItem >
                <Box  width={'100%'} marginTop={'10px'} >
                  <Text as={'h5'} fontSize={'16px'} fontWeight={'bold'} textAlign={'left'}  color={'white'}  >Shivam Enterprises is your one-stop destination for all your UPVC needs. We provide services for UPVC doors, windows, balcony railings and stair railing that are tailor-made to fit your requirements.</Text>
                  </Box>
                </GridItem>
                <GridItem border={'1px solid yellow'}></GridItem>
               </Grid>
          </GridItem>
         </Grid>
    </Box>
  )
}

export default Home