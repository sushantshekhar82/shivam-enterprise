import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from './RounderText.png';
import WithSubnavigation from '../components/Navbar'
import '../App.css';
const Home = () => {
  return (
    <Box backgroundColor={'#274A37'} height={'750px'} >
         <WithSubnavigation/>
         <Grid gridTemplateColumns={{base:'1fr',lg:'10% 35% 50%'}}>
          <GridItem>

          </GridItem>
          <GridItem >
            <Image src="./doorpattern.webp" alt="Shivam Enterprise Door pattern" width={'380px'} height={'700px'} />
          </GridItem>
          <GridItem >
               <Grid gridTemplateRows={'250px 100px 300px'}>
                <GridItem  className='SpaceGrotesk'>
                  <Box  width={'100%'} marginTop={'100px'} >
                  <Text as={'h1'} fontSize={'70px'} lineHeight={'70px'} textAlign={'left'} fontWeight={'bold'} color={'white'} >BRINGING BEAUTY AND SECURITY TO YOUR SPACES</Text>
                  </Box>
                </GridItem>
                <GridItem >
                <Box  width={'75%'} marginTop={'80px'}  paddingLeft={'5px'} >
                  <Text as={'h5'} fontSize={'16px'}  textAlign={'left'}  color={'white'}  >Shivam Enterprises is your one-stop destination for all your UPVC needs. We provide services for UPVC doors, windows, balcony railings and stair railing that are tailor-made to fit your requirements.</Text>
                  </Box>
                </GridItem>
                <GridItem  marginTop={'60px'} justifyContent={'center'} alignItems={'center'}>
                  <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex gap={'10px'}>
                  <Button bg={'#E68C2C'}>LEARN MORE</Button>
                  <Image src='./PlayButton.svg' alt="playbutton"/>
                  </Flex>
                  <img src={logo} className="App-logo" alt="logo" />
                  </Flex>
                </GridItem>
               </Grid>
          </GridItem>
         </Grid>
         <Grid gridTemplateColumns={'70% 28%'}>
             <GridItem></GridItem>
             <GridItem></GridItem> 
         </Grid>
    </Box>
  )
}

export default Home