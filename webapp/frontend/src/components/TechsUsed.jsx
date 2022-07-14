import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import EntityLink from "./EntityLink";
import React from "react";
import { t } from "../translate";

export const TechsUsed = props => (
  <Wrap spacing="1">
    <WrapItem>{t(["Techs used:"], props.contentLanguage)} </WrapItem>
    { props.techs.map((tech, index) =>
      (
        <WrapItem key={index}>
          <Tag>
            <EntityLink
              text={tech.name}
              url={tech.link}
              icon={tech.icon}
              preIcon={true}
              wIcon={4}
              hIcon={4}
            />
          </Tag>
        </WrapItem>
      )
    )}
  </Wrap>
);

export default TechsUsed;
