import React from "react";
import { Accordion } from "@chakra-ui/react";

import { dataJobs } from "../dataJobs";

import Job from "./Job";

export const Jobs = () => {
  const jobs = getJobs();
  return (
    <Accordion mt={3} allowMultiple>
      {jobs.map((job, index) => (
        <Job
          id={index}
          company={job.company}
          current={job.current}
          description={job.description}
          position={job.position}
          techs={job.techs}
          time={job.time}
        />
      ))}
    </Accordion>
  );
};

function getJobs() {
  return dataJobs;
}

export default Jobs;
