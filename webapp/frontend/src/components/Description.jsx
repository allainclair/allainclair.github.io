import React from "react";

import EntityLink from "./EntityLink";

const Description = props => (
  props.description.map(segment => (
    segment.link ? <EntityLink text={segment.text} url={segment.link} /> : segment.text
  ))
);

export default Description;
