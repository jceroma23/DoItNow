import { Tbody, Tr,  Td, Avatar, AvatarGroup, Box} from '@chakra-ui/react'
import React, { useState } from 'react';

const TodoListTable = ({  todolist, todoListModal }) => {
  const handleSetData = () => {
    if (todoListModal) {
      todoListModal(todolist)  
    }
    
  }

  return (
    <>
      <Tbody onClick={handleSetData}>
        <Tr
        _hover={{background: "white", color: "teal.800", shadow: 'lg', bg: 'blue.100', cursor: 'pointer' }} textShadow='base' >
          <Td>
            <Box w='10' h='10' bg={todolist.label} borderRadius='full'>

            </Box>
          </Td>
          <Td>{todolist.task}</Td>
          <Td>{todolist.category}</Td>
          <Td>{formatDate(todolist.StartDate)}</Td>
          <Td>{formatDate(todolist.DueDate)}</Td>
          <Td>{todolist.prioritize}</Td>
          <Td>
              <AvatarGroup size='md' max={2}>
                {todolist.team.map((inviAvatar, index) => (
                  <Avatar key={index} name={inviAvatar.fullName} src={inviAvatar.avatar} />
                ))}
              </AvatarGroup>
          </Td>
          <Td>{todolist.status}</Td>
        </Tr>
      </Tbody>
    </>
  )
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  if (dateString) {
    const dateParts = dateString.split('/');
    const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    return date.toLocaleDateString(undefined, options);
  }

  return ''; // Return an empty string if dateString is undefined
};


export default TodoListTable