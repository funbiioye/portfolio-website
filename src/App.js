import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {Flex, Heading, VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin   } from 'react-icons/fa';
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {


  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <VStack p={5} >
      <Flex w ="100%" >
        <Heading 
          ml={['0',"8"]} size="md" fontWeight="semibold" color="cyan.400">
            funbiiOye
        </Heading>

        <Spacer></Spacer>
        <IconButton  icon={<FaLinkedin />}  isRound="true" onClick={() => window.open('#')}></IconButton>
        <IconButton ml ={2} icon={ <FaInstagram/>} isRound="true" onClick={() => window.open('#')}></IconButton>
        <IconButton ml ={2} icon={ <FaGithub /> } isRound="true" onClick={() => window.open('#')}></IconButton>
        <IconButton ml ={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  )
 
}

export default App;
