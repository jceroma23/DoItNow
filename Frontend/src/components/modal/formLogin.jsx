import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack, Input, Text, Checkbox, Stack } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

// Components
import PrimaryButton from "../buttons/primaryButton";
import InputField from "../input/inputField";



const FormLogin = ({ onClose, isOpen }) => {
// Show Hide Password
  const [ show, setShow] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)
  const navigation = useNavigate()

  // HandleSubmit form
  const onSubmit = (values) => {
    setIsLoading(true)
    alert(JSON.stringify(values, null, 2))
    setTimeout(() => {
      setIsLoading(false)
      navigation('/home')
    }, 2000)
  }

  const initialValues = {
    Username: '',
    Password: ''
  }
  const validationSchema = Yup.object({
    Username: Yup.string().min(5).required(),
    Password: Yup.string().min(5).required()
  })

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay  bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'/>
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
      <ModalBody>
        {/* Form */}
        <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues} >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                {/* Input Field Components */}
                <InputField errors={errors.Username} touched={touched.Username} fieldName='Username' Input={Input} type='text' variant='filled' />
                <InputField errors={errors.Password} touched={touched.Password} fieldName='Password' Input={Input} type={show ? 'text' : 'password'} variant='filled' />
              {/* Show and Remember */}
                <Stack direction='row' spacing={6}>
                <Field
                  as={Checkbox}
                  id="showPassword"
                  name="showPassword"
                  colorScheme="purple"
                  onChange={handleShow}
                >Show Password</Field>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >Remember me?</Field>
                </Stack>
                  <PrimaryButton text='Login' type='submit' isLoading={isLoading} />
              </VStack>
            </form>
          )}       
        </Formik>
      </ModalBody>
      <ModalFooter>
        <Text>Welcome to DoItNow</Text>
      </ModalFooter>
      </ModalContent>
     
    </Modal>
  )
}

export default FormLogin