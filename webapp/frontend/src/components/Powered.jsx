import React from "react";

import { Link, Text } from "@chakra-ui/react";
import EntityLink from "./EntityLink";
import { FaReact } from "react-icons/fa";

export const Powered = () => (
  <>
    <Text align="center" mt={10}>
      Website made by Allainclair and powered by {" "}
      <EntityLink
        text="React"
        url="https://reactjs.org/"
        icon={FaReact}
        preIcon={true}
        wIcon={5}
        hIcon={5}
      /> and {" "}
      <Link href="https://chakra-ui.com/">Chakra-ui</Link>.
      Last updated on Dec 2020.
    </Text>
  </>

);

export default Powered;