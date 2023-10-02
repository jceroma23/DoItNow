import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({  errors, touched, fieldName, setStartDate, startDate }) => {
    
    

  return (
    <FormControl>
        <FormLabel htmlFor="date">{fieldName}</FormLabel>
            <DatePicker minDate={new Date()} id={fieldName} name={fieldName} selected={startDate} onChange={(date) => setStartDate(date)} touched={touched} errors={errors}/>
            <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  )
}

export default InputDate