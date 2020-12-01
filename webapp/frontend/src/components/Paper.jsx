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

import Description from "./Description";
import EntityLink from "./EntityLink";

export const Paper = props => {
  const { description, institution, time } = props;
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: bg }}>
        <Box flex="1" textAlign="left">
          <Text fontSize="lg">
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
            <Text>
              <Description description={description} />
            </Text>
          </Box>
          <Text fontSize="sm" align="right">{time}</Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Paper;
