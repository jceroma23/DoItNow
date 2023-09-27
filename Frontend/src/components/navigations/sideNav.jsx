import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, VStack, Divider, Heading } from "@chakra-ui/react";
import { MdHome, MdAssignment, MdAssignmentTurnedIn, MdAccountCircle } from "react-icons/md";
import LinkBoxDesign from "../Links/linkBox";


const SideNav = ({ onClose, isOpen, finalFocusRef }) => {
  return (
   <Drawer placement="left" onClose={onClose} isOpen={isOpen} finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                DoItNowLogo
            </DrawerHeader>
            <DrawerBody p='20px'>
                <VStack spacing={2}>
                <Heading as='h2'>Dashboard</Heading>
                    <LinkBoxDesign textProps='Home' IconsProps={MdHome} LinksProps='/home'  />
                    <LinkBoxDesign textProps='To Do Board' IconsProps={MdAssignment} LinksProps='/TodoBoard'  />
                    <LinkBoxDesign textProps='To Do List' IconsProps={MdAssignmentTurnedIn} LinksProps='/TodoList'  />
                </VStack>
            </DrawerBody>
            <Divider />
            <DrawerFooter>
                    <LinkBoxDesign textProps='Profile' IconsProps={MdAccountCircle} LinksProps='/account'  />
                    <LinkBoxDesign textProps='Sign out' IconsProps={MdAssignmentTurnedIn} LinksProps='/TodoList'  />
            </DrawerFooter>
        </DrawerContent>
   </Drawer>
  )
}

export default SideNav