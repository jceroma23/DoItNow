import { Card, CardBody, Image, Stack, Heading, Text, Divider, LinkBox, LinkOverlay } from "@chakra-ui/react";
import cardImage from "../../assets/cardImageSample.jpg";
const ToDoBoard = ({ itemTodo, itemDetail, itemImage, itemTime  }) => {

  return (
    <LinkBox>
        <Card maxW='sm'>
        <CardBody>
            <LinkOverlay href='#'>
                <Image src={itemImage} alt="Sample Image" borderRadius='lg' boxSize='250px'
                    objectFit='cover' />
                <Stack>
                    <Heading as='h3' >{itemTodo}</Heading>
                    <Text>{itemDetail}</Text>
                    <Text>{itemTime}</Text>
                    <Divider />
                    <Text>Show More</Text>
                </Stack>
            </LinkOverlay>
        </CardBody>
        </Card>
    </LinkBox>
    
  )
}

export default ToDoBoard