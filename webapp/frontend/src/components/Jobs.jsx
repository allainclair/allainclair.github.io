import React from "react";
import { Accordion } from "@chakra-ui/react";

import { dataJobs, dataJobs_ } from "../dataJobs";

import Job from "./Job";

export const Jobs = props => {
  const jobs = getJobs(props.contentLanguage);
  return (
    <Accordion mt={3} allowMultiple>
      {jobs.map((job, index) => (
        <Job
          id={index}
          company={job.company}
          contentLanguage={props.contentLanguage}
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

function getJobs(contentLanguage) {
  return dataJobs_[contentLanguage];
}

export default Jobs;
