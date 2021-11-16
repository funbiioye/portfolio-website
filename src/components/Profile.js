import React from 'react'
import { Box, Flex, Heading, Text} from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon';
import {DiCodeBadge, DiReact,DiGitMerge} from 'react-icons/di'

function Profile() {

    

    return (
        <Flex direction={["column","row"]} w="100%"
            maxWidth={["100vh", "100vh", "100vh", "100vh"]}
            alignSelf='flex-start'
            p={["0",'0']}>
            {/* <HStack spacing='10' maxWidth={["column","row"]} w="100%"> */}
                <Box alignSelf="center" px={["0",'0']} py='16'>
                    <Heading fontWeight ='extrabold' color='cyan.500' size={'4xl'} mt={5} ml={["0",'32']} w='100%'>
                        1+
                    </Heading>
                    <Text fontSize={["1xl","2xl"]} color="gray.400" ml={["0",'32']} >Years of Experience</Text>
                </Box>
                <Box alignSelf={['left',"center"]} px={["0",'0']} py='16'>
                    <Text ml={["0",'43']}fontWeight={['small','bold']} fontSize={['14px','18px']}>Front End Developer, specialised in web application design and development.</Text>
                    <Flex direction={['column', 'row']} mt={5} w='100%'  ml={10} >
                        <Flex rounded='xl' direction='column' mt={4} bg='blue.400' mr={5} h='30vh' w='30vh' justify='flex-end'>
                            <Icon color='white' p='4' as={DiCodeBadge} w='24' h='24'/>
                            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                                Web Apps
                            </Text>
                        </Flex>
                        <Flex rounded='xl' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end' >
                            <Icon color='white' p='4' as={DiReact} w='24' h='24'/>
                            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                                React
                            </Text>
                        </Flex>
                        <Flex rounded='xl' direction='column' mt={4} mr={5} bg='blue.400' h='30vh' w='30vh' justify='flex-end' >
                            <Icon color='white' p='4' as={DiGitMerge} w='24' h='24'/>
                            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                                Version Control(Git)
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            {/* </HStack> */}

        </Flex>
    )
}

export default Profile
