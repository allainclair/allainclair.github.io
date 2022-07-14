import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { DownloadIcon, EmailIcon, Icon, SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Center,
  Image,
  Heading,
  HStack,
  Link,
  Tooltip,
  Text, useColorMode, Button, IconButton,
} from "@chakra-ui/react";

import me from "./allain.jpg";
import { t } from "../translate";
import ChangeLanguage from "./ChangeLangue";

const Top = props => {
  const { contentLanguage } = props;

  return (
    <>
      <Center mt={3}>
        <Image alt="Allainclair's Photo" src={me} boxSize="30%" borderRadius="full" fit />
      </Center>
      <Center mt={3}>
        <ChangeLanguage
          contentLanguage={contentLanguage}
          setContentLanguage={props.setContentLanguage}
        />
      </Center>

      <Heading mt={3} align="center">Allainclair Flausino dos Santos</Heading>

      <Text mt={1} fontSize="2xl" align="center">
        {t(["Software Engineer", "at"], contentLanguage)} {` `}
        <Link href="https://pinterest.com">Pinterest</Link>
        {` ${t(["and"], contentLanguage)} `}
        <Link href="https://bairesdev.com/">BairesDev</Link>
      </Text>

      <Text mt={1} fontSize="xl" align="center">
        <Link href="http://python.org/">Python</Link> dev, {t(["Software Engineer"], contentLanguage)}, {t(["and", "Computer Scientist"], contentLanguage)}
      </Text>

      <Center mt={2}>
        <HStack>
          <Tooltip label="allainclair@gmail.com" aria-label="allainclair@gmail.com">
            <Link href="mailto:allainclair@gmail.com" isExternal>
              <EmailIcon w={8} h={8} />
            </Link>
          </Tooltip>
          <Link href="https://github.com/allainclair" isExternal>
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/allainclair/" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="https://twitter.com/allainclair" isExternal>
            <Icon as={FaTwitter} w={8} h={8} />
          </Link>
        </HStack>
      </Center>
      <Center mt={2}>
        <HStack>
          <ToggleModeButton/>
          <MyResumeButton contentLanguage={contentLanguage}/>
        </HStack>
      </Center>
    </>
  );
};

function ToggleModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/> }
    />
  )
}

function MyResumeButton(props) {
  const { contentLanguage } = props;

  return (
    <Button
      as={Link}
      href="https://github.com/allainclair/allainclair/raw/gh-pages/allainclair-resume.pdf"
      rightIcon={<DownloadIcon/>}
    >
      {t(["My resume"], contentLanguage)}
    </Button>
  );
}

export default Top;
