import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { t } from "../translate";

export const Intro = (props) => {
  const { contentLanguage } = props;

  return (
    <>
      <Heading mt={6} size="md" align="center">{t(["Hi"], contentLanguage)}!</Heading>
      <Text mt={3}>
        {t(["intro"], contentLanguage)}
      </Text>
    </>
  );
};

export default Intro;
