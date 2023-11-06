import { Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const InputField = ({ errors, touched, fieldName, Input, type, variant }) => {
  return (
    <FormControl isInvalid={!!errors && touched}>
        <FormLabel htmlFor={fieldName}>{fieldName}</FormLabel>
        <Field as={Input} id={fieldName} name={fieldName} type={type} variant={variant} placeholder={fieldName} />
        <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  )
}

export default InputField