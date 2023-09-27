import React, { useState } from 'react'
import navLogo from '../assets/navLogoBlack.png'
import { Box, Flex, Spacer, Stack, Container, Text, Image, useDisclosure } from "@chakra-ui/react";


// Button
import PrimaryButton from '../components/buttons/primaryButton'
import SecondaryButton from '../components/buttons/secondaryButton'

// Modal
import FormLogin from '../components/modal/formLogin';
import FormRegister from '../components/modal/formRegister';
// Images
import heroImg from '../assets/BgBackground.jpg'



const LoginPage = () => {
const LoginModal = useDisclosure()
const RegisterModal = useDisclosure()

  const handleClick = () => {
    alert(`Hello Login`)
  }


  return (
    <>
      <Box h='100vh' p='1.5'>
      {/* Login Header */}
        <Flex pe='24'>
          <Box>
            <img className='w-44' src={navLogo} alt="" />
          </Box>
            <Spacer />
          <Box>
            <Stack spacing={4} direction='row' align='center' pt='1'>
              <PrimaryButton text='Login' onClick={LoginModal.onOpen} />
              <SecondaryButton text='Register' onClick={RegisterModal.onOpen} />
            </Stack>
          </Box>
        </Flex>
  {/* Hero Section */}
        <Box as='section' mt='8' >
          <Flex direction='row'>
            <Container>
              <h1 className='text-5xl text-emerald-950 font-bold'>Where Task Find There Time</h1>
              <Text mt='5' >
                Feeling overwhelmed by tasks and deadlines? DoItNow is your simple and free solution to stay in control of your to-do lists.
              </Text>
                <Container mt='10' >
                  <PrimaryButton text='Get Started Now' />
                </Container>
            </Container>
            <Container >
                <Image src={heroImg} alt="HeroSectionImg" borderRadius='10px' />
            </Container>
          </Flex>
        </Box>
      </Box>
     <FormLogin onClose={LoginModal.onClose} isOpen={LoginModal.isOpen}/>
     <FormRegister onClose={RegisterModal.onClose} isOpen={RegisterModal.isOpen}/>
    </>
  )
}

export default LoginPage