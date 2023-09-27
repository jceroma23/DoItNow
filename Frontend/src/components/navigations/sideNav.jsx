import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter } from "@chakra-ui/react";

const SideNav = ({ onClose, isOpen, finalFocusRef }) => {
  return (
   <Drawer placement="left" onClose={onClose} isOpen={isOpen} finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                DoItNow Logo
            </DrawerHeader>
            <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </DrawerBody>
        </DrawerContent>
   </Drawer>
  )
}

export default SideNav