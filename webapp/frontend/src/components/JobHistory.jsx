import React from "react";
import {
  Heading,
} from "@chakra-ui/react";

import Jobs from "./Jobs";

const JobHistory = () => (
  <>
    <Heading mt={6} size="md" align="center">Job History</Heading>
    <Jobs />
  </>
);

export default JobHistory;
