import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack, Input, Text, Stack, Box } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// Components
import InputField from "../input/inputField";
import PrimaryButton from "../buttons/primaryButton";
import { useNavigate } from "react-router-dom";


const FormRegister = ({ onClose, isOpen }) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const navigation = useNavigate()
  const onSubmit = (values) => {
    setIsLoading(true)
    alert(JSON.stringify(values, null, 2))
    setTimeout(() => {
      setIsLoading(false)
      navigation('/home')
    }, 2000)
  }

  const initialValues = {
    Email: '',
    Fullname: '',
    Username: '',
    Password: '',
    RetypePassword: '',
    Occupation: 'Freelancer'
  }

  const ValidationSchema = Yup.object().shape({
    Fullname: Yup.string().min(5, 'Full name must be at least 5 characters').required('Full name is required'),
    Email: Yup.string().email('Invalid email format').required('Email is required'),
    Username: Yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
    Password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    RetypePassword: Yup.string()
      .oneOf([Yup.ref('Password'), null], 'Passwords must match')
      .required('Retype password is required'),
    Occupation: Yup.string().default('Freelancer'), // Assuming it's a select field with 'Freelancer' as the default
  });


  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay  bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'/>
      <ModalContent>
        <ModalHeader>Create an Account</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Formik onSubmit={onSubmit} validationSchema={ValidationSchema} initialValues={initialValues}>
          {/* Register Form */}
            {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack>
                  {/* Field Components */}
                  <InputField errors={errors.Email} touched={touched.Email} fieldName='Email' Input={Input} type='Email' variant='filled' />
                    
                  <InputField errors={errors.Fullname} touched={touched.Fullname} fieldName='Fullname' Input={Input} type='text' variant='filled' />
                
                  <InputField errors={errors.Username} touched={touched.Username} fieldName='Username' Input={Input} type='text' variant='filled' />
                  
                  <InputField errors={errors.Password} touched={touched.Password} fieldName='Password' Input={Input} type='password' variant='filled' />

                  <InputField errors={errors.RetypePassword} touched={touched.RetypePassword} fieldName='RetypePassword' Input={Input} type='password' variant='filled' />
                  <Text fontSize='xs' >Password must be at least 6 characters, a mix of letters, numbers, and symbols</Text>

                  <Stack direction='row' mt='1.5'  >
                    <PrimaryButton text='Register' type='submit' isLoading={isLoading}/>
                  </Stack>  
                  </VStack>
                </form>
            )}
            {/* End Register Form */}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Text>The data will remain secure when you register.</Text>
        </ModalFooter>
      </ModalContent>
      
    </Modal>
  )
}

export default FormRegister