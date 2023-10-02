import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter } from "@chakra-ui/react";
import {  } from "@chakra-ui/icons";
import { AiFillAccountBook, AiOutlinePicture } from 'react-icons/ai'


const PopOverButton = ({ containerRef }) => {
  const hoverStyle = {background: "white", color: "teal.800", shadow: 'lg', bg: 'blue.100', cursor: 'pointer' }
  return (
    <Popover>
      <PopoverTrigger>
        <Button w={'36'} h={'8'} leftIcon={<AiOutlinePicture />} colorScheme='whiteAlpha.500' variant='solid' _hover={hoverStyle}>Change Label</Button>
      </PopoverTrigger>
      <Portal containerRef={containerRef}>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
          <center>
            Change Label
          </center>
            
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            Color Box for Label
            Use Api unSplash
          </PopoverBody>
          <PopoverFooter>This is Footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default PopOverButton