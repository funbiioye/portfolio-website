import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Flex, Box, Text} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';

function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    

    return (
        <Stack>
            <Img position="absolute"  mt ={[10,2,2,2]} mb={[0,15]} mr={[10,10,10,10]}
                borderRadius='full'
                backgroundColor="gray.100" boxShadow="lg"  w="180px" h="180px" alignSelf="flex-end"
                opacity={isDark ? 'gray.500' : 'blue.200'}
                src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7f7f4fcc-ec5a-40fa-9b81-aeab298a7b50%2FCapture.portfolio.image.png?table=block&id=b9a4a7e2-12fb-4001-9510-20aad1d72cf1&spaceId=31ea88c9-c9a3-4d97-bfe4-bb3c937b9476&width=480&userId=879c984d-ac4c-497c-ac4a-be734c57d83a&cache=v2'
             />
            <Flex direction={["row",'column']}
                spacing="200px" pt={["32",'0']}
                alignSelf="flex-start">
                <Box mt={[8,16]} align='flex-start'>
                    <Text fontSize={['2xl','5xl']} fontWeight='semibold' ml={[1,0,0,0]} >Hi, I am</Text>
                    <Text mt={4} fontSize={['2xl','7xl']} fontWeight='bold' bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Oyelusi Oluwafunmibi Adesola</Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'} fontSize={['small', 'medium', 'medium', 'medium']} >Front End Developer, React.js, JavaScript, Html, Css.</Text>
                    <Button mt={8}  colorScheme="blue" onClick={() => window.open('https://www.notion.so/Hi-I-m-Oluwafunmibi-and-I-m-a-Front-End-developer-16e33ce04bd04b1d97f4ddd92dc92f04')}>Hire Me</Button>
                </Box>
                {/* <Img alignSelf='center' mt={isNotSmallerScreen ? "0" : '12'}
                    mb={isNotSmallerScreen ? "0" : '12'} borderRadius='full'
                    backgroundColor="transparent" boxShadow ="lg"
                    boxSize='300px'  />  */}

               
             </Flex>
        </Stack>
            
        
    )
}

export default Header
