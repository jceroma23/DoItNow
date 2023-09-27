import React from 'react'
import { Button } from "@chakra-ui/react";


const PrimaryButton = ({ text, onClick, type, isLoading }) => {
  return (
      <Button colorScheme='green' onClick={onClick} type={type} isLoading={isLoading}>
        {text}
      </Button>
  )
}

export default PrimaryButton