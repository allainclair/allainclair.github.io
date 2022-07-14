import React from "react";
import { Link, HStack } from "@chakra-ui/react";
import { DownloadIcon, EmailIcon, Icon, SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt  } from 'react-icons/fa';


const ICON_SIZE = 7;

const Contacts = () => (
  <HStack>
    <Link href="https://www.linkedin.com/in/allainclair/" isExternal>
      <Icon as={FaLinkedin} w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
    <Link href="mailto:allainclair@gmail.com" isExternal>
      <EmailIcon w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
    <Link href="https://github.com/allainclair" isExternal>
      <Icon as={FaGithub} w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
    <Link href="https://twitter.com/allainclair" isExternal>
      <Icon as={FaTwitter} w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
    <Link href="https://www.google.com/maps/place/Maring%C3%A1+-+Floriano,+Maring%C3%A1+-+State+of+Paran%C3%A1/@-23.4108407,-52.1106941,11z/data=!3m1!4b1!4m5!3m4!1s0x94ecd6ee42618c1f:0xc356592828e03925!8m2!3d-23.4209995!4d-51.9330558" isExternal>
      <Icon as={FaMapMarkerAlt} w={ICON_SIZE} h={ICON_SIZE} />
    </Link>
  </HStack>
)

export default Contacts;
