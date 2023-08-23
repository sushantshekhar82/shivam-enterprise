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
            <Image src="./doorpattern.webp" alt="Shivam Enterprise Door pattern" width={{base:'90%',lg:'380px'}} height={'700px'} />
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
             <GridItem padding={'20px'}><Box border={'1px solid red'} height={'300px'}>hi</Box></GridItem>
             <GridItem>this is second grid</GridItem> 
            
         </Grid>

         <Box backgroundColor={'#274A37'} width={'100%'} height={'600px'}>
               <Grid gridTemplateColumns={{base:'1fr',lg:'40% 60%'}}>
                   <GridItem className='SpaceGrotesk'>
                    <Box lineHeight={'70px'} padding={'50px'}>
                      <Text as='h1' fontSize={'70px'} fontWeight={'bold'} color={'white'} textAlign={'left'}>Our Latest</Text>
                       <Text as='h1' fontSize={'70px'} fontWeight={'bold'} color={'white'} textAlign={'left'}>Projects</Text>
                   </Box>
                   </GridItem>
                    <GridItem className='SpaceGrotesk'>
                      <Box padding={'50px'}>
                    <Text as={'h5'} textAlign={'left'}  color={'white'}>Our most recent door and window project was a total makeover of a delightful mid-century modern property in the city's heart. We worked directly with the owner to build custom-made doors and windows that were both functional and elegant in order to enhance the aesthetic of the property while keeping its original character.

The finished product was a magnificent renovation that breathed new life into the house. The owners were overjoyed with the outcome and praised our high level of craftsmanship and attention to detail on the project.
</Text>
                      </Box>
                    </GridItem>
               </Grid>
         </Box>

    </Box>
  )
}

export default Home