import React, { useRef, useState } from 'react'
import { Box, SimpleGrid, Heading, GridItem, Grid, Container, Divider, Stack,
  Table, Thead, Th, Tr, TableContainer, useDisclosure} from "@chakra-ui/react";

// Components
import Navigation from '../components/navigations/navigation'
import BgBackground from "../assets/BgBackground.jpg";
import ToDoBoard from '../components/cards/toDoBoard';
import Footer from '../components/footer/footer';
import TodoListTable from '../components/tables/todoListTable';
import FormTodolist from '../components/modal/formTodolist';




const HomePage = () => {
  const [ todoListData, setTodoListData ] = useState(null)
  const todoListModal = useDisclosure()
 
  const handleModalData = (todolist) => {
    setTodoListData(todolist)
    todoListModal.onOpen()
  }
  // Sample Data
  const todoData = [
    {
      todo: 'Work Project',
      detail: 'Complete work project tasks',
      DateStarted: '28/09/2023',
      imageCard: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      status: 'onGoing',
      taskList: [
        {
          label: 'red',
          task: 'Design UI',
          category: 'Design',
          StartDate: '2023-10-15',
          DueDate: '2023-10-30',
          prioritize: 'High',
          team: [
            {
              fullName: 'Jane Smith',
              avatar: 'https://bit.ly/jane-smith'
            }
          ],
          status: 'Incomplete',
        },
        {
          label: 'blue',
          task: 'Backend Development',
          category: 'Development',
          StartDate: '2023-09-28',
          DueDate: '2023-10-15',
          prioritize: 'Medium',
          team: [
            {
              fullName: 'John Doe',
              avatar: 'https://bit.ly/john-doe'
            },
            {
              fullName: 'Alice Johnson',
              avatar: 'https://bit.ly/alice-johnson'
            },
          ],
          status: 'Incomplete',
        },
      ]
    },
    {
      todo: 'Home Cleaning',
      detail: 'Clean and organize the house',
      DateStarted: '28/09/2023',
      imageCard: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      status: 'Done',
      taskList: [
        {
          label: 'green',
          task: 'Living Room',
          category: 'House Cleaning',
          StartDate: '2023-09-28',
          DueDate: '2023-09-29',
          prioritize: 'Low',
          team: [],
          status: 'Complete',
        },
        {
          label: 'yellow',
          task: 'Kitchen',
          category: 'House Cleaning',
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
    <Box as='div'>
      <SimpleGrid columns={1}>
        <Box height='50px'>
          <Navigation />
        </Box>
{/* Start Board */}
        <Box minH='100vh' backgroundImage={BgBackground} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" p='9'>
          <Container maxW='100%' p={2}>
            <Heading as='h3' size='md' mb={2}>Recent Board</Heading>
              <Grid templateColumns='repeat(6, 1fr)' gap={4} mx={10} my={10}>
                {todoData.map((item, index) => (
                  <GridItem minW='100%' key={index}> 
                    <ToDoBoard itemTodo={item.todo} itemDetail={item.detail} itemImage={item.imageCard} itemStatus={item.status} />
                  </GridItem>
                )) }    
              </Grid>
{/* End Board */}
                  <Divider my={5} color='black'/>
{/* Start Task */}
              <Heading as='h3' size='md' mb={2}>Recent Task</Heading>
                  {todoData.map((item, index) => ( 
                      <Box key={index} mx={10} my={10}>
                        <Heading as='h6' size='md' >From Board: {item.todo}</Heading>
                          <TableContainer>
                            <Table variant='simple' bg='white' borderRadius='lg' p={'10'} size='sm'>
                              <Thead bg={'blue.100'} borderRadius='lg'  >
                                <Tr>
                                    <Th>Label</Th>
                                    <Th>Task</Th>
                                    <Th>Category</Th>
                                    <Th>Date Started</Th>
                                    <Th>Due Date</Th>
                                    <Th>Priority</Th>
                                    <Th>Team</Th>
                                    <Th>Status</Th>
                                </Tr>
                              </Thead>                             
                                {item.taskList.map((todolist, taskindex) => (                        
                                    <TodoListTable todolist={todolist} key={taskindex} todoListModal={handleModalData} />
                                ))}                             
                            </Table>
                          </TableContainer>
                        </Box>             
                  ))}
{/* End Task */}
          </Container>   
        </Box>
        <Box bg='gray.700'>
          <Footer />
        </Box>
      </SimpleGrid>
      <FormTodolist onClose={todoListModal.onClose} isOpen={todoListModal.isOpen} data={todoListData} />
    </Box>
  )
}

export default HomePage