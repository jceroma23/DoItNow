import { Modal, Flex, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack, Input, HStack, Spacer, Center, Image, Box, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import InputField from "../input/inputField";
import InputDate from "../input/inputDate";
import PrimaryButton from "../buttons/primaryButton";


const FormAddBoard = ({ isOpen, onClose }) => {
    const [ imageLink, setImageLink ] = useState('https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    const [ isLoading, setIsLoading ] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const onSubmit = (values) => {
    setIsLoading(true)
    alert(JSON.stringify(values, null, 2))
    setTimeout(() => {
      setIsLoading(false)
      navigation('/home')
    }, 2000)
  }
    const initialValues = {
        BoardName: '',
        Details: '',
        imageCover: {imageLink},
        DueDate: {startDate}
    }
  console.log(initialValues)
    const validationSchema = Yup.object().shape({
        BoardName: Yup.string().required('Todo is required'),
        Details: Yup.string().required('Details are required'),
        // imageCover: Yup.string().url('Image must be a valid Splash URL').required('Image Splash URL is required'),
        // DueDate: Yup.date() 
    });


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Center>
                        Start a New Adventure
                    </Center>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
{/* Formik */} 
                <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>
                {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>                    
                        {/* Form */}   
                                <Center bg='gray.500'>
                                    <Image src={imageLink}  boxSize='150px' objectFit='cover' alt='BG Background'/>
                                </Center>     
                                <Flex as="div" w='100%' >
                                    <Spacer />
                                        <Button mt={'5'} mb={'3'}>Change Cover</Button>   
                                </Flex>                     
                            <VStack spacing={4} align='flex-start'>   
                                <InputField errors={errors.BoardName} touched={touched.BoardName} fieldName='BoardName' Input={Input} type='text' variant='filled' />
                                <InputField errors={errors.Details} touched={touched.Details} fieldName='Details' Input={Input} type='text' variant='filled' />
                                <InputDate errors={errors.DueDate} touched={touched.DueDate} fieldName='DueDate' setStartDate={setStartDate} startDate={startDate} />
                                <HStack mt='5'>
                                <PrimaryButton text='Save' type='submit' isLoading={isLoading} />
                                </HStack>
                            </VStack>
                    </form>
                )}
                </Formik>

                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
    </Modal>
  )
}

export default FormAddBoard