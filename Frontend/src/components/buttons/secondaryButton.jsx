import React from 'react'
import { Button } from "@chakra-ui/react";
const SecondaryButton = ({ text, onClick }) => {
  return (
    <Button colorScheme='gray' onClick={onClick}>
      {text}
    </Button>
  )
}

export default SecondaryButton