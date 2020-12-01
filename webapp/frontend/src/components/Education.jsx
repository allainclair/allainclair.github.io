import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import EntityLink from "./EntityLink";
import TechsUsed from "./TechsUsed";
import Description from "./Description";

export const Education = props => {
  const { graduation, institution, techs, time, thesis } = props;
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: bg }}>
        <Box flex="1" textAlign="left">
          <Text fontSize="lg">{graduation} at {" "}
            <EntityLink
              text={institution.name}
              url={institution.link}
              preIcon={false}
              wIcon={6}
              hIcon={6}
            />
          </Text>
        </Box>
        <AccordionIcon/>
      </AccordionButton>

      <AccordionPanel pb={4}>
        <Flex>
          <Box flex="1" textAlign="left">
            <Description description={thesis} />
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

export default Education;
