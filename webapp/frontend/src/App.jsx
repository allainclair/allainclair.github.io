import React, { useState } from "react";
import { Container } from "@chakra-ui/react";

import { PT_BR, EN } from "./consts";

import Top from "./components/Top";
import JobHistory from "./components/JobHistory";
import Educations from "./components/Educations";
import AreasTSkills from "./components/AreasTSkills";
import ScientificPapers from "./components/ScientificPapers";
import Intro from "./components/Intro";
import Hobbies from "./components/Hobbies";
import Powered from "./components/Powered";
import detectBrowserLanguage from "detect-browser-language";

const App = () => {
  const browserLanguage = detectBrowserLanguage();
  const lang = browserLanguage === PT_BR ? PT_BR : EN;
  const [ contentLanguage, setContentLanguage ] = useState(lang);

  return (
    <>
      <Container maxW="3xl" mb={10}>
        <Top
          contentLanguage={contentLanguage}
          setContentLanguage={setContentLanguage}
        />
        <Intro contentLanguage={contentLanguage} />
        {/* TODO: melhorar display de datas/time */}
        <JobHistory contentLanguage={contentLanguage} />
        <Educations/>
        <AreasTSkills/>
        <ScientificPapers/>
        <Hobbies/>
        <Powered/>
      </Container>
    </>
  );
};

export default App;
