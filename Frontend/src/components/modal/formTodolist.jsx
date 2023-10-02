import { Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, VStack, Image, Center, Box } from "@chakra-ui/react";
import { Formik } from "formik";
import PopOverButton from "../buttons/popOverButton";
import { useRef } from "react";



const FormTodolist = ({ onClose, isOpen, data }) => {
  const ref = useRef(null)
console.log(data)
  const imageSrc = 'https://images.pexels.com/photos/15591206/pexels-photo-15591206/free-photo-of-under.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={"xl"}>
      <ModalOverlay />
      {data ? (
      <ModalContent ref={ref}>
     
        <ModalHeader bg={data.label}>
            <Box mt={'5'}>
              <PopOverButton containerRef={ref} _hover={{}} />  
            </Box>    
        </ModalHeader>

        <ModalCloseButton bg='whiteAlpha.700'  />
        <ModalBody>
          
            <VStack>
              <div>{data.task}</div>
              <div>{data.category}</div>
            </VStack>
          
        </ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
       
      </ModalContent>
      ) : (
      <div>No Data to display</div>
      )}
    </Modal>
  );
  
}

export default FormTodolist