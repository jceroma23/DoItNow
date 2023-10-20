import React, { Fragment } from 'react'
import { Image, Text, Box, Center} from "@chakra-ui/react";


const UnSplashImg = ({ photo }) => {
  const { user, urls } = photo
  console.log('this is photo', photo)
  return (
    <Fragment>
         <Box
        _hover={{
          transform: 'scale(1.05)', // Increase the size on hover
          cursor: 'pointer', // Change cursor to a pointer on hover
        }}
      >
        <Image
          src={urls.raw}
          boxSize='100px'
          objectFit='cover'
        />
        <Text fontSize='xs' as='sub'>{user.name}</Text>
      </Box>
    </Fragment>
  )
}

export default UnSplashImg