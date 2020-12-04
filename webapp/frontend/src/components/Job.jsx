import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Description from "./Description";
import EntityLink from "./EntityLink";
import TechsUsed from "./TechsUsed";


export const Job = props => {
  const { id, company, current, description, position, techs, time } = props;
  const backGround = useColorModeValue("gray.100", "gray.900");

  return (
    <AccordionItem key={id}>
      <AccordionButton _expanded={{ bg: backGround }}>
        <Box flex="1" textAlign="left">
          <Text fontSize="lg">{position} at {" "}
            <EntityLink
              text={company.name}
              url={company.link}
              icon={company.icon}
              preIcon={false}
              wIcon={6}
              hIcon={6}
            />
          </Text>
        </Box>
        { current && <Badge mr={1} colorScheme="blue">Current</Badge> }
        <AccordionIcon/>
      </AccordionButton>

      <AccordionPanel pb={4}>
        <Flex>
          <Box flex="1" textAlign="left">
            <Text>
            <Description description={description} />
            </Text>
            {/* TODO: Add link to techs: create component for techs OR reuse InstitutionLink */}
            <Text fontSize="sm" mt={2}>
              <TechsUsed techs={techs} />
            </Text>
          </Box>
          <Text fontSize="sm" align="right">{time}</Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Job;
