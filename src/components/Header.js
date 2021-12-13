import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Flex, Box, Text} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/react';


function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    

    return (
        <Stack>
            <Img position="absolute"  mt ={[10,2,2,2]} mb={[0,15]} mr={[4,10,10,10]}
                borderRadius='full'
                backgroundColor="gray.100" boxShadow="lg"  w="180px" h="180px" alignSelf="flex-end"
                opacity={isDark ? 'gray.500' : 'blue.500'}
                src='https://media-exp1.licdn.com/dms/image/C4E03AQFzeRQMT4JetA/profile-displayphoto-shrink_200_200/0/1637694266967?e=1643241600&v=beta&t=fc3HU1tzye9geanxlJGL6qDpMVTRe7y0QJNZl0u3D1s'
             />
            <Flex direction={["row",'column']}
                spacing="200px" pt={["32",'0']}
                alignSelf="flex-start">
                <Box mt={[8,16]} align='flex-start'>
                    <Text fontSize={['2xl','5xl']} fontWeight='semibold' ml={[1,0,0,0]} >Hi, I am</Text>
                    <Text mt={4} fontSize={['2xl','7xl']} fontWeight='bold' bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Oyelusi Oluwafunmibi Adesola</Text>
                    <Text color={isDark ? 'gray.200' : 'gray.500'} fontSize={['small', 'medium', 'medium', 'medium']} >Front End Developer, React.js, JavaScript, Html, Css.</Text>
                    <Button mt={8}  colorScheme="blue" onClick={() => window.open('https://portfolio-blue-pi-62.vercel.app/')}>Hire Me</Button>
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
