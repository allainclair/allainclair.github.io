import React from "react";
import {Heading, Link, Tag, Wrap, WrapItem, VStack} from "@chakra-ui/react";

const InterestAreas = () => (
  <VStack>
    <Heading size="md">Interest Areas</Heading>
    <Wrap spacing={2}>
      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Algorithm" colorScheme="blue" size="lg">
          Algorithms
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Software_engineering" colorScheme="blue" size="lg">
          Software Engineering
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Combinatorial_optimization" colorScheme="blue" size="lg">
          Optimization
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Statistics" colorScheme="blue" size="lg">
          Stats
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Graph_theory" colorScheme="blue" size="lg">
          Graph Theory
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag as={Link} href="https://www.google.com/search?q=monitoring+and+alerting" colorScheme="blue" size="lg">
          Monitoring & Alerting
        </Tag>
      </WrapItem>

      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Data_science#:~:text=Data%20science%20is%20a%20%22concept,domain%20knowledge%20and%20information%20science." colorScheme="blue" size="lg">
          Data Science & Engineering
        </Tag>
      </WrapItem>

      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Software_testing" colorScheme="blue" size="lg">
          Testing
        </Tag>
      </WrapItem>

      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Research_and_development" colorScheme="blue" size="lg">
          R & D
        </Tag>
      </WrapItem>

      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Traffic_optimization" colorScheme="blue" size="lg">
          Traffic Optimization
        </Tag>
      </WrapItem>

      <WrapItem>
        <Tag as={Link} href="https://en.wikipedia.org/wiki/Natural_language_processing" colorScheme="blue" size="lg">
          NLP
        </Tag>
      </WrapItem>
    </Wrap>
  </VStack>
);
export default InterestAreas;