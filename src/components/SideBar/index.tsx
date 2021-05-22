import {
  Box,
  Drawer,
  DrawerBody,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};
