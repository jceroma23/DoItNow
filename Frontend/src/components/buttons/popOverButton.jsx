import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiOutlinePicture } from 'react-icons/ai'
import UnSplashBody from "../images/unSplashBody";


const PopOverButton = ({ containerRef, buttonName }) => {
  const [ labelCover, setLabelCover ] = useState('false')

  useEffect(() => {
    if (buttonName === 'Change cover') {
      setLabelCover(true);
    } else if (buttonName === 'Change Label') {
      setLabelCover(false);
    }
  }, [buttonName]);
  

  const hoverStyle = {background: "white", color: "teal.800", shadow: 'lg', bg: 'blue.100', cursor: 'pointer' }
  return (
    <Popover>
      <PopoverTrigger>
        <Button w={'36'} h={'8'} leftIcon={<AiOutlinePicture />} colorScheme='whiteAlpha.500' variant='solid' _hover={hoverStyle}>{buttonName}</Button>
      </PopoverTrigger>
      <Portal containerRef={containerRef}>
        <PopoverContent minH='40'>
          <PopoverArrow />
          <PopoverHeader>
          <center>
            {buttonName}
          </center>
            
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody h='auto' w='auto' >
            { labelCover ? <h1> <UnSplashBody />  </h1> : <h1>This is Label</h1> }
          </PopoverBody>
          <PopoverFooter>This is Footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default PopOverButton