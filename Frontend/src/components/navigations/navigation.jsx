import { Box, Flex, HStack, Heading, Spacer, Avatar, AvatarBadge, MenuButton, Portal, MenuList, MenuItem, Alert, Menu, IconButton, Text, Badge, useDisclosure } from "@chakra-ui/react";
import { BellIcon, HamburgerIcon} from '@chakra-ui/icons'
import { css } from '@emotion/react';
import InputSearch from "../input/inputSearch";
import SideNav from "./sideNav";
import { useRef } from "react";

const Navigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const handleClick = () => {
        alert('Handle Click')
    }

  return (
    <Flex bg='gray.700' as='nav' py='1.5' pl='8' pr='16' alignItems='center'>
        <HStack spacing={4}>
            <IconButton aria-label='Side Nav' icon={<HamburgerIcon h={5} w={5} size='sm' />} colorScheme='gray' variant='solid' size='sm' onClick={onOpen} ref={btnRef}/>
            <Heading as='h1' color='gray.100'>DoItNow Logo</Heading>
        </HStack> 


        <Spacer />
            <InputSearch />
        <Spacer />


        <HStack spacing={4}>
        {/* Notification Make this a Menu */}
            <IconButton
                css={css`
                position: relative !important;
                `}
                py={'2'}
                colorScheme='gray.700'
                aria-label={'Notifications'}
                icon={<>
                    <BellIcon w={8} h={8} />
                    <Box as={'span'} color={'white'} position={'absolute'} top={'20px'} right={'4px'} fontSize={'0.8rem'}
                        bgColor={'red'} borderRadius={'lg'} zIndex={9999} p={'2px'}>
                       22
                    </Box>
                </>}
            />
        {/* Account */}
            <Menu>
                    <MenuButton>
                        <Avatar size='sm' name='Jest Ceroma' src='https://bit.ly/broken-link'> 
                            <AvatarBadge boxSize='15px' bg='green.500' />
                        </Avatar>
                    </MenuButton>
                    <Portal>
                        <MenuList>
                            <MenuItem onClick={handleClick}>Set Status</MenuItem>
                            <MenuItem>Account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>    
                    </Portal>
            </Menu>
        </HStack>

                    <SideNav isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}/>
    </Flex>
  )
}

export default Navigation