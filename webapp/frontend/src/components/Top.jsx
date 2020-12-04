import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { DownloadIcon, EmailIcon, Icon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Center,
  Image,
  Heading,
  HStack,
  Link,
  Tooltip,
  Text, useColorMode, Button, IconButton
} from "@chakra-ui/react";

import me from "./allain.jpg";

const Top = () => (
  <>
    <Center mt={3}>
      <Image alt="Allainclair" src={me} boxSize="30%" borderRadius="full" fit />
    </Center>

    <Heading mt={3} align="center">Allainclair Flausino dos Santos</Heading>

    <Text mt={1} fontSize="2xl" align="center">
      Software Engineer at {` `}
      <Link href="https://pinterest.com">Pinterest</Link>
      {` and `}
      <Link href="https://bairesdev.com/">BairesDev</Link>
    </Text>

    <Text mt={1} fontSize="xl" align="center">
      <Link href="http://python.org/">Python</Link> dev, Software Engineer, and Computer Scientist
    </Text>

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
    <Center mt={2}>
      <HStack>
        <ToggleModeButton/>
        <MyResumeButton/>
      </HStack>
    </Center>
  </>
);

function ToggleModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/> }
    />
  )
}

function MyResumeButton() {
  return (
    <Button
      as={Link}
      href="https://github.com/allainclair/allainclair/raw/gh-pages/allainclair-resume.pdf"
      rightIcon={<DownloadIcon/>}
    >
      My Resume
    </Button>
  );
}

export default Top;
