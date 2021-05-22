import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  name: string;
  icon: IconType;
  url: string;
}

export function NavLink({ name, icon, url, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={url} passHref>
      <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </Link>
    </ActiveLink>
  );
}
