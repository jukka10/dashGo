import { Flex } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { Profile } from "./Pofile";
import { SearchBox } from "./SearchBox";

export const Header = () => {
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

      <SearchBox />

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
