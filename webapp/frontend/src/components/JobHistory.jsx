import React from "react";
import {
  Heading,
} from "@chakra-ui/react";

import { t } from "../translate";
import Jobs from "./Jobs";

const JobHistory = (props) => (
  <>
    <Heading mt={6} size="md" align="center">
      {t(["Job History"], props.contentLanguage)}
    </Heading>
    <Jobs contentLanguage={props.contentLanguage} />
  </>
);

export default JobHistory;
