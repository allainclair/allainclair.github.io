import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { EmailIcon, Icon } from "@chakra-ui/icons";
import {
  Center,
  Image,
  Heading,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";

import me from './allain.jpg';

const Top = () => (
  <>
    <Center mt={2}>
      <Image alt="Allainclair" src={me} boxSize="30%" borderRadius="full" fit />
    </Center>

    <Heading mt={2} align="center">Allainclair Flausino dos Santos</Heading>

    <Heading mt={2} size="lg" align="center">
      Software Engineer at <Link href="https://pinterest.com">Pinterest</Link> and <Link href="https://bairesdev.com/">BairesDev</Link>
    </Heading>

    <Heading mt={2} size="md" align="center">
      <Link href="http://python.org/">Python</Link> dev, Software Engineer, and Computer Scientist
    </Heading>

    <Center mt={2}>
      <HStack>
        <Tooltip label="allainclair@gmail.com" aria-label="allainclair@gmail.com">
          <Link href="mailto:allainclair@gmail.com">
            <EmailIcon w={8} h={8} />
          </Link>
        </Tooltip>
        <Link href="https://github.com/allainclair">
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
        <Link href="https://www.linkedin.com/in/allainclair/">
          <Icon as={FaLinkedin} w={8} h={8} />
        </Link>
        <Link href="https://twitter.com/allainclair">
          <Icon as={FaTwitter} w={8} h={8} />
        </Link>
      </HStack>
    </Center>
  </>
);

export default Top;
