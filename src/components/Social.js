import React from 'react'
import Icon from '@chakra-ui/icon'
import { HStack, Center} from '@chakra-ui/layout'
import {FaFacebookF, FaGoogle, FaSpotify, FaShopify} from 'react-icons/fa'

function Social() {
    return (
        <Center >
            <HStack mt={28} spacing={['5','24']}>
                <Icon as={FaFacebookF} boxSize={['5','30']}    />
                <Icon as={FaGoogle}    boxSize={['5','30']}    />
                <Icon as={FaSpotify}   boxSize={['5','30']}    />
                <Icon as={FaShopify}   boxSize={['5','30']}    />
            </HStack>
        </Center>
     
    )
}

export default Social
