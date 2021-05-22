import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { Profile } from "./Pofile";
import { SearchBox } from "./SearchBox";
import { useSidebarDrawer } from "../../context/sidebarContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
  const { onOpen } = useSidebarDrawer();
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
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
