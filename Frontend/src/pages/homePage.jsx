import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/react";
import Navigation from '../components/navigations/navigation'

const HomePage = () => { 
  
  return (
    <Box as='div'>
    <SimpleGrid columns={1} spacingX='40px' spacingY='20px' px='10px'>
      <Box height='50px'>
        <Navigation />
      </Box>
      <Box height='70vh'>
        Main Page
      </Box>
      <Box height='80px'>
        Footer
      </Box>
    </SimpleGrid>
    </Box>
  )
}

export default HomePage