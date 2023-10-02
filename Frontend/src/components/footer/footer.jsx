import { Container, HStack, ButtonGroup, IconButton, Text } from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '2', md: '4' }}>
        <HStack spacing={{ base: '4', md: '5' }}>
              <HStack justify="space-between" direction="row" align="center">
                <ButtonGroup variant="tertiary">
                  <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                  <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                  <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                </ButtonGroup>
              </HStack>
              <Text fontSize="sm" color="white">
                &copy; {new Date().getFullYear()} Jestoni Ceroma. All rights reserved.
              </Text>
        </HStack>
    </Container>
  )
}

export default Footer