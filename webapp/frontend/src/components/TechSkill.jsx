import { Box, Flex, Spacer } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";

import EntityLink from "./EntityLink";

export const TechSkill = (props) => {
  const { icon, link, name, score } = props;

  let stars = [];
  for (let i=0; i<score; i++) {
    stars.push(<StarIcon/>);
  }

  return (
    <Flex>
      <EntityLink
        text={name}
        url={link}
        icon={icon}
        preIcon={true}
        wIcon={6}
        hIcon={6}
      />
      <Spacer/>
      <Box>
        { stars }
      </Box>
    </Flex>
  );
};

export default TechSkill;
