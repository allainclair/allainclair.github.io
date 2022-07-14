import React, { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { FaLanguage } from "react-icons/fa";

import { PT_BR, EN } from "../consts";

export const ChangeLanguage = props => {
  const { contentLanguage, setContentLanguage } = props;
  const optionLang = contentLanguage === PT_BR ? EN : PT_BR;
  const [ optionLanguage, setOptionLanguage ] = useState(optionLang);

  const changeLanguage = () => {
    setContentLanguage(optionLanguage);
    setOptionLanguage(contentLanguage);
  };

  const showLanguage = lang => (lang === PT_BR ? "Português brasileiro" : "English");

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<Icon as={FaLanguage} w={10} h={10} />}
        rightIcon={<ChevronDownIcon />}
      >
        {showLanguage(contentLanguage)}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={changeLanguage}>{showLanguage(optionLanguage)}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ChangeLanguage;
