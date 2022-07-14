import React from "react";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Text, Wrap} from "@chakra-ui/react";

const AllainclairIntro = () => (
  <Accordion minW="100%" allowMultiple>
    <AccordionItem key="1">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Heading size="md">Allainclair Flausino dos Santos</Heading>
        </Box>
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        <Text>Or Allain for short. Since my adolescence, I have been a
          computer enthusiast; I was amazed by the internet. Before the internet,
          our reach was too limited; after, unlimited. Since that time,
          I follow every day, the path to becoming a better tech professional.
          I have a computer science background, and I have achieved significant professional
          positions so far. I thank my family and all people responsible for this.
        </Text>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default AllainclairIntro;