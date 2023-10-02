import { Box, SimpleGrid, Container, Heading, TableContainer, Table, Thead, Tr, Th, useDisclosure, Spacer } from "@chakra-ui/react";
import Navigation from "../components/navigations/navigation";
import Footer from "../components/footer/footer";
import TodoListTable from "../components/tables/todoListTable";
import FormTodolist from "../components/modal/formTodolist";
import { useState } from "react";


const TaskPage = () => {
  const [ todoListData, setTodoListData ] = useState(null)
  const todoListModal = useDisclosure()


  const handleModalData = (todolist) => {
    setTodoListData(todolist)
    todoListModal.onOpen()
  }
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
      <Container h={'100vh'} maxW={'100%'}>
      <Heading as='h3' size='md' mb={2}>Your Task List</Heading>
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

      </Container>
      <Spacer />
        <Box bg='gray.700'>
          <Footer />
        </Box>
    </SimpleGrid>
  )
}

export default TaskPage