import { Icon, LinkBox, Box, HStack, Text, LinkOverlay, } from "@chakra-ui/react";


const LinkBoxDesign = ({ IconsProps, LinksProps, textProps }) => {
  return (
    <LinkBox w="64" h='10' borderRadius='base' _hover={{ bg: 'gray.200' }} boxShadow='sm'>
        <HStack p='1.5' spacing={2}>
            <Box pr={"1.5"}>
                <Icon as={IconsProps}  w={7} h={7}></Icon>
            </Box>
            <LinkOverlay href={LinksProps}>
                <Text fontSize='lg'>{textProps}</Text>      
            </LinkOverlay>
        </HStack>
    </LinkBox>
  )
}

export default LinkBoxDesign