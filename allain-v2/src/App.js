import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  ChakraProvider,
  Box,
  Button,
  Image,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Contacts from "./components/Contacts";
import me from "./allain.jpg";
import AllainclairIntro from "./components/AllainclairIntro";
import InterestAreas  from "./components/InterestAreas";
import MyResumeButton from "./components/MyResumeButton";
import PrincipalTechSkills from "./components/PrincipalTechSkills";
import GithubProjects from "./components/GithubProjects";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Wrap spacing={0} justify='center' mt={4} >
        <WrapItem maxW="450px">
          <VStack spacing={7}>
            <VStack>{/* Criar um componente aqui */}
              <Image alt="Allainclair's Photo" src={me} boxSize="180px" borderRadius="full" fit />
              <AllainclairIntro/>
              <Text>
                Software Engineer, <Link href="http://python.org/">Pythonist</Link>, and Computer Scientist
              </Text>
              <Contacts />
              <MyResumeButton />
            </VStack>
            {/* Adicionar um espacamento aqui */}
            <PrincipalTechSkills/>
            {/* Adicionar um espacamento aqui */}
            <GithubProjects/>
            {/* Adicionar um espacamento aqui */}
            <InterestAreas/>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack spacing={2}>
            <Heading size="md">Job History</Heading>
            <Text> asdfk sakjsdfjk kjasjkd jkasdjk jkasdjkf jkasdjkf d asda jaksdjkf jkasjk ajks jkajksdf jkasjdk </Text>
            {/* Talvez manter Accordion fechado com CURRENT e tambem ANOS de trabalho. */}
            {/* Descricao com algumas imagens, icones, etc, que sejam relevantes aos projetos */}
            {/* Focar tambem em talvezz projetos */}
          </VStack>
          <ColorModeSwitcher justifySelf="flex-end" />
        </WrapItem>
      </Wrap>
    </ChakraProvider>
  );
}

export default App;
