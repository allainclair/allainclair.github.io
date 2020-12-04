import React from "react";
import { Accordion, Heading } from "@chakra-ui/react";

import Education from "./Education";
import { dataEducations } from "../dataEducations";

export const Educations = () => {
  const educations = getEducations();
  return (
    <>
      <Heading mt={6} size="md" align="center">Education</Heading>
      <Accordion mt={3} allowMultiple>
        {educations.map((education, index) => (
          <Education
            id={index}
            institution={education.institution}
            thesis={education.thesis}
            graduation={education.graduation}
            techs={education.techs}
            time={education.time}
          />
        ))}
      </Accordion>
    </>
  );
};

function getEducations() {
  return dataEducations;
}

export default Educations;
