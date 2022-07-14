import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Heading,
  Spacer,
  Text,
  VStack,
  Wrap, WrapItem
} from "@chakra-ui/react";
import { Icon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import { FaPython, FaJs, FaJava, FaDatabase, FaLinux, FaCode, FaHeart, FaTools } from 'react-icons/fa';

const PrincipalTechSkills = () => (
  <VStack minW="100%">
    <Heading size="md">Principal Tech Skills</Heading>
      <Accordion allowMultiple minW="100%">
        <AccordionItem key="1">
          <AccordionButton>
            {/* Adicionar espaco entre icone e texto */}
            <Icon as={FaPython} w={6} h={6} /> Python
            <Spacer/>
            <StarIcon color="yellow.200"/>
            <StarIcon color="yellow.200"/>
            <StarIcon color="yellow.200"/>
            <StarIcon color="yellow.200"/>
            <StarIcon color="yellow.200"/>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={FaHeart} />
                My main and most loved language
              </ListItem>
              <ListItem>
                <ListIcon as={TimeIcon} />
                10 years of experience
              </ListItem>
              <ListItem>
                {/* Usar Tags pra framkeworks & tools */}
                <ListIcon as={FaTools} />
                Most known frameworks & tools: Flask FastAPI SQLAlchemy Jupyter Pandas Scikit-learn Gevent
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="2">
          <AccordionButton>
            <Icon as={FaJs} w={6} h={6}/> JavaScript
            <Spacer/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            {/*</Box>*/}
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            <Text>Python roxx x xx x x x  x x x x x x x xxxxxx xxxx xxxxx x xxxxxxxx xxxx
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="3">
          <AccordionButton>
            <Icon as={FaDatabase} w={6} h={6}/> SQL & NoSQL
            <Spacer/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            <Text>Python roxx x xx xxx xx xxx x x  xxxx x x x x x x x xxxxxx xxxx xxxxx x xxxxxxxx xxxx
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="4">
          <AccordionButton>
            <Icon as={FaLinux} w={6} h={6}/> Linux & Bash
            <Spacer/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <AccordionIcon/>
          </AccordionButton>
          <AccordionPanel>
            <Text>Python roxx x xx xxxxx xx xx xx xxx x x  x x x x x x x xxxxxx xxxx xxxxx x xxxxxxxx xxxx
            </Text>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>



  </VStack>
);

export default PrincipalTechSkills;