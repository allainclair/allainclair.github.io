import React from "react";
import { Box, Container, useColorMode, Button } from "@chakra-ui/react";

import Top from "./components/Top";
import JobHistory from "./components/JobHistory";
import Educations from "./components/Educations";
import AreasTSkills from "./components/AreasTSkills";
import ScientificPapers from "./components/ScientificPapers";

const App = () => (
  <Container maxW="md">
    <Top/>
    <ColorMode/>
    <JobHistory/> {/* TODO: melhorar display de datas/time */}
    <Educations/>
    <AreasTSkills/>
    <ScientificPapers/>
  </Container>
);

function ColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box mt={6} align="center">

      <Button onClick={toggleColorMode} >
          Toggle { colorMode === "light" ? "Dark" : "Light" }
      </Button>
      </Box>
    )
}

export default App;
