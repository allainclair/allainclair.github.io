import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import InterestAreas from "./InterestAreas";
import TechSkills from "./TechSkills";

export const AreasTSkills = () => (
  <>
    <Heading mt={6} size="md" align="center">Interest Areas & Tech Skills</Heading>
    <Flex mt={3}>
      <Box width="55%">
        <InterestAreas/>
      </Box>

      <Spacer />

      <Box width="45%">
        <TechSkills/>
      </Box>
    </Flex>
  </>
);

export default AreasTSkills;
