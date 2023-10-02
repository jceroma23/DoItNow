import { Card, CardBody, Image, Stack, Heading, Text, Divider, LinkBox, LinkOverlay, Badge } from "@chakra-ui/react";
import cardImage from "../../assets/cardImageSample.jpg";
import { useState, useEffect } from "react";
const ToDoBoard = ({ itemTodo, itemDetail, itemImage, itemTime, itemStatus  }) => {
    const [ statusColor, setStatusColor ] = useState('green')

    useEffect(() => {
        if (itemStatus === 'onGoing') {
          setStatusColor('blue');
        } else if (itemStatus === 'Done') {
          setStatusColor('green');
        } else {
          setStatusColor('red');
        }
      }, [itemStatus]);

  return (
    <LinkBox>
        <Card maxW='md' _hover={{background: "white", color: "teal.800", shadow: 'lg', cursor: 'pointer',  transform: 'translateY(-5px)',
            transition: '0.2s  ̶e̶a̶s̶e̶-̶i̶n̶-̶o̶u̶t̶', }}>
        <Image src={itemImage} alt="Sample Image" borderRadius='sm' maxH='56'
                    objectFit='cover' objectPosition='center' />
        <CardBody>
        <LinkOverlay href='#'></LinkOverlay>
                <Stack>
                    <Heading as='h3' size='md' >{itemTodo}</Heading>
                    <Text fontSize='sm'>{itemDetail}</Text>
                    <Text fontSize='sm' >{itemTime}</Text>
                    <Divider />
                    <Badge colorScheme={statusColor} variant='solid' maxW='32' >{itemStatus}</Badge>
                </Stack>
        </CardBody>
        </Card>
    </LinkBox>
    
  )
}

export default ToDoBoard