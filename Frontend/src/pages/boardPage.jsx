import { Box, SimpleGrid, Container, Heading, Grid, GridItem, HStack, Button, useDisclosure } from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";
import Navigation from "../components/navigations/navigation";
import ToDoBoard from "../components/cards/toDoBoard";
import FormAddBoard from "../components/modal/formAddBoard";

const BoardPage = () => {
  // Modal Disclosure
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Sample data
      const todoData = [
      {
        todo: 'Software Development Project',
        detail: 'Complete software development tasks',
        DateStarted: '28/09/2023',
        imageCard: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1676&q=80',
        status: 'onGoing',
        taskList: [
          {
            label: 'purple',
            task: 'Frontend Development',
            category: 'Development',
            StartDate: '2023-10-01',
            DueDate: '2023-10-30',
            prioritize: 'High',
            team: [
              {
                fullName: 'Emily Brown',
                avatar: 'https://bit.ly/emily-brown'
              },
              {
                fullName: 'Alex Green',
                avatar: 'https://bit.ly/alex-green'
              },
            ],
            status: 'Incomplete',
          },
          {
            label: 'orange',
            task: 'Database Design',
            category: 'Design',
            StartDate: '2023-09-28',
            DueDate: '2023-10-15',
            prioritize: 'Medium',
            team: [
              {
                fullName: 'Sophia Johnson',
                avatar: 'https://bit.ly/sophia-johnson'
              },
              {
                fullName: 'Daniel White',
                avatar: 'https://bit.ly/daniel-white'
              },
            ],
            status: 'Incomplete',
          },
          {
            label: 'blue',
            task: 'Testing',
            category: 'Quality Assurance',
            StartDate: '2023-10-10',
            DueDate: '2023-10-25',
            prioritize: 'Medium',
            team: [
              {
                fullName: 'Michael Smith',
                avatar: 'https://bit.ly/michael-smith'
              },
            ],
            status: 'Incomplete',
          },
          {
            label: 'green',
            task: 'Documentation',
            category: 'Documentation',
            StartDate: '2023-09-30',
            DueDate: '2023-10-10',
            prioritize: 'Low',
            team: [],
            status: 'Incomplete',
          },
          {
            label: 'pink',
            task: 'Project Review',
            category: 'Review',
            StartDate: '2023-10-20',
            DueDate: '2023-10-30',
            prioritize: 'High',
            team: [
              {
                fullName: 'Ethan Wilson',
                avatar: 'https://bit.ly/ethan-wilson'
              },
            ],
            status: 'Incomplete',
          },
        ]
      },
      {
        todo: 'Gardening',
        detail: 'Plant and maintain the garden',
        DateStarted: '28/09/2023',
        imageCard: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
        status: 'Done',
        taskList: [
          {
            label: 'green',
            task: 'Plant Flowers',
            category: 'Planting',
            StartDate: '2023-09-28',
            DueDate: '2023-09-29',
            prioritize: 'Low',
            team: [],
            status: 'Complete',
          },
          {
            label: 'yellow',
            task: 'Trim Hedges',
            category: 'Maintenance',
            StartDate: '2023-09-28',
            DueDate: '2023-09-29',
            prioritize: 'Low',
            team: [],
            status: 'Complete',
          },
          {
            label: 'orange',
            task: 'Vegetable Garden',
            category: 'Planting',
            StartDate: '2023-09-28',
            DueDate: '2023-09-29',
            prioritize: 'Low',
            team: [],
            status: 'Complete',
          },
          {
            label: 'blue',
            task: 'Watering',
            category: 'Maintenance',
            StartDate: '2023-09-28',
            DueDate: '2023-09-29',
            prioritize: 'Low',
            team: [],
            status: 'Complete',
          },
          {
            label: 'pink',
            task: 'Lawn Care',
            category: 'Maintenance',
            StartDate: '2023-09-28',
            DueDate: '2023-09-29',
            prioritize: 'Low',
            team: [],
            status: 'Complete',
          },
        ]
      }
    ];


  return (
    <SimpleGrid column={1}>
      <Box>
        <Navigation />
      </Box>   
      <Container maxW={'7xl'} minH={'100vh'} my={'5'}>
        <HStack mb={10}>
          <Heading as={'h1'} size={'md'}>Board</Heading>

          <Button leftIcon={<AiFillFileAdd />} size='sm' onClick={onOpen}>Add Task Board</Button>
        </HStack>
        
        <Grid templateColumns='repeat(5, 1fr)' gap={4} mx={5}>
          {todoData.map((item, index) => (
            <GridItem minW='100%' key={index}> 
              <ToDoBoard itemTodo={item.todo} itemDetail={item.detail} itemImage={item.imageCard} itemStatus={item.status} />
            </GridItem>
          )) }    
        </Grid>
      </Container>
      <FormAddBoard isOpen={isOpen} onClose={onClose} />
    </SimpleGrid>
  )
}

export default BoardPage