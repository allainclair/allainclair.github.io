import { Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import React from "react";

export const EntityLink = props => {
  const { text, url, icon, preIcon, hIcon, wIcon } = props;
  const iconComponent = icon && <Icon as={icon} w={wIcon} h={hIcon} />;
  const isLeftIcon = iconComponent && preIcon;
  const isRightIcon = iconComponent && !preIcon;

  if (isLeftIcon) {
    return <Link href={url}>{iconComponent}{` ${text}`}</Link>;
  } else if (isRightIcon) {
    return <Link href={url}>{`${text} `}{iconComponent}</Link>;
  } else {
    return <Link href={url}>{text}</Link>;
  }
};

export default EntityLink;
