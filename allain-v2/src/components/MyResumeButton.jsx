import React from "react";

import { Button, Link } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

//TODO: MUDAR LINK ou ARQUIVO. ESTA DESATUALIZADO!!!!
const MyResumeButton = () => (
    <Button
      as={Link}
      href="https://github.com/allainclair/allainclair/raw/gh-pages/allainclair-resume.pdf"
      rightIcon={<DownloadIcon/>}
    >
      My resume
    </Button>
);

export default MyResumeButton;
