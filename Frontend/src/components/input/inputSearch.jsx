import { SearchIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";

const InputSearch = () => {
  return (
    <InputGroup size={'md'} w='350px'>
        <Input pr='4.5rem'
        type='text'
        color={"white"}
        placeholder='Search' />
        <InputRightElement width='4.5rem'>
            <Button h='1.35rem' w='1.35rem' size='sm'>
                <SearchIcon />
            </Button>
        </InputRightElement>
    </InputGroup>
  )
}

export default InputSearch