import React from "react";
import { Container } from "@chakra-ui/react";

import Top from "./components/Top";
import JobHistory from "./components/JobHistory";
import Educations from "./components/Educations";
import AreasTSkills from "./components/AreasTSkills";
import ScientificPapers from "./components/ScientificPapers";
import Intro from "./components/Intro";
import Hobbies from "./components/Hobbies";
import Powered from "./components/Powered";

const App = () => (
  <>
    <Container maxW="3xl" mb={10}>
      <Top/>
      <Intro/>
      <JobHistory/> {/* TODO: melhorar display de datas/time */}
      <Educations/>
      <AreasTSkills/>
      <ScientificPapers/>
      <Hobbies/>
      <Powered/>
    </Container>
  </>
);

export default App;
