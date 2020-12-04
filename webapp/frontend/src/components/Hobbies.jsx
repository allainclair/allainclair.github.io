import React from "react";
import { Center, Heading, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { FaBeer, FaGamepad, FaFilm } from 'react-icons/fa';
import EntityLink from "./EntityLink";

export const Hobbies = () => (
  <>
    <Heading mt={6} size="md" align="center">Hobbies</Heading>
    <Center mt={3}>
      <Wrap spacing={2}>
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
              text="Gaming"
              url="https://en.wikipedia.org/wiki/Video_game"
              icon={FaGamepad}
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
      </Wrap>
    </Center>
  </>
);

export default Hobbies;
