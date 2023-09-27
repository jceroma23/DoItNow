import React from 'react'
import { Box, SimpleGrid, Heading, Container, GridItem, Grid } from "@chakra-ui/react";

// Components
import Navigation from '../components/navigations/navigation'
import BgBackground from "../assets/BgBackground.jpg";
import ToDoBoard from '../components/cards/toDoBoard';




const HomePage = () => { 
      const todoData = [
        {
          todo: 'Excercise',
          detail: 'Any excercise',
          time: '7:00 AM',
          imageCard: 'https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-of-a-young-boy-with-a-shadowy-silhouette-against-the-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          todo: 'Eat Lunch',
          detail: 'Healthy Foods',
          time: '12:00 PM',
          imageCard: 'https://images.pexels.com/photos/17236943/pexels-photo-17236943/free-photo-of-woman-hand-holding-white-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]

  return (
    <Box as='div'>
    <SimpleGrid columns={1}>
      <Box height='50px'>
        <Navigation />
      </Box>
      <Box height='80vh' backgroundImage={BgBackground} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" p='9'>
          <Heading as='h3'>Recent Board</Heading>

          <Grid templateColumns='repeat(5, 1fr)' gap={3}>
            {todoData.map((item, index) => (
              <GridItem w='100%' h='10' key={index}> 
                <ToDoBoard itemTodo={item.todo} itemDetail={item.detail} itemImage={item.imageCard} itemTime={item.time} />
              </GridItem>
            )) }    
          </Grid>

      </Box>
      <Box height='80px' bg='gray.700'>
        Footer
      </Box>
    </SimpleGrid>
    </Box>
  )
}

export default HomePage