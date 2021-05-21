import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { Profile } from "./Pofile";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxW={1480}
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
