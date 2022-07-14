import React from "react";
import { Heading, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { FaBeer, FaGamepad, FaFilm, FaAtom } from 'react-icons/fa';
import EntityLink from "./EntityLink";

export const Hobbies = () => (
  <>
    <Heading mt={6} size="md" align="center">Hobbies</Heading>
      <Wrap justify="center" mt={3} spacing={2}>
        <WrapItem>
          <Tag colorScheme="blue" size="lg">
            <EntityLink
              text="8-Ball/Snooker"
              url="https://en.wikipedia.org/wiki/Eight-ball"
            />
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag colorScheme="blue" size="lg">
            <EntityLink
              text="Beer/Brewing"
              url="https://en.wikipedia.org/wiki/Brewing"
              icon={FaBeer}
              preIcon={true}
              wIcon={6}
              hIcon={6}
            />
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag colorScheme="blue" size="lg">
            <EntityLink
              text="Watching Movies"
              url="https://en.wikipedia.org/wiki/Film"
              icon={FaFilm}
              preIcon={true}
              wIcon={6}
              hIcon={6}
            />
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag colorScheme="blue" size="lg">
            <EntityLink
              text="Physics"
              url="https://en.wikipedia.org/wiki/Physics#:~:text=Physics%20(from%20Ancient%20Greek%3A%20%CF%86%CF%85%CF%83%CE%B9%CE%BA%CE%AE,entities%20of%20energy%20and%20force."
              icon={FaAtom}
              preIcon={true}
              wIcon={6}
              hIcon={6}
            />
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag colorScheme="blue" size="lg">
            <EntityLink
              text="Gaming"
              url="https://en.wikipedia.org/wiki/Video_game"
              icon={FaGamepad}
              preIcon={true}
              wIcon={6}
              hIcon={6}
            />
          </Tag>
        </WrapItem>
      </Wrap>
  </>
);

export default Hobbies;
