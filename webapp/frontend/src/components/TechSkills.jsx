import React from "react";
import { FaPython, FaJs, FaJava, FaDatabase, FaLinux, FaCode } from 'react-icons/fa';
import { VStack } from "@chakra-ui/react";

import TechSkill from "./TechSkill";

export const TechSkills = () => {
  return (
    <>
      {/* TODO: PUT LINKS TO TECHS */}
      <VStack align="stretch" spacing={1}>
        <TechSkill
          key={1}
          icon={FaPython}
          link="https://www.python.org/"
          name="Python"
          score={5}
        />
        <TechSkill
          key={2}
          icon={FaJs}
          link="https://en.wikipedia.org/wiki/JavaScript"
          name="JavaScript"
          score={3}
        />
        <TechSkill
          key={3}
          icon={FaLinux}
          link="https://www.linux.org/"
          name="Linux / Bash"
          score={3}
        />
        <TechSkill
          key={4}
          icon={FaDatabase}
          link="https://en.wikipedia.org/wiki/SQL"
          name="SQL / DBs"
          score={2}
        />
        <TechSkill
          key={5}
          icon={FaJava}
          link="https://www.java.com/"
          name="Java"
          score={2}
        />
        <TechSkill
          key={6}
          icon={FaCode}
          link="https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20(%2Fsi%CB%90%2F%2C,efficiently%20to%20typical%20machine%20instructions."
          name="C"
          score={2}
        />
      </VStack>
    </>
  );
};

export default TechSkills;
