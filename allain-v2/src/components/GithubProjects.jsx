import React from "react";
import {Heading, List, ListIcon, ListItem, VStack} from "@chakra-ui/react";
import {FaGithub, FaCode} from "react-icons/fa";
import {Icon} from "@chakra-ui/icons";

const GithubProjects = () => (
  <VStack>
    <Heading size="md"><Icon as={FaGithub} w={6} h={6} /> Github Projects</Heading>
    {/* User Wrap talvez com tags (igual interest areas) ao inves de List */}
    <List spacing={1}>
      <ListItem>
        <ListIcon as={FaCode} />Algorithms
      </ListItem>
      <ListItem>
        <ListIcon as={FaCode} />I don't know
      </ListItem>
    </List>
  </VStack>
)

export default GithubProjects;