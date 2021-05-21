import { Box, Stack } from "@chakra-ui/react";
import {
  RiContrastLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="geral">
          <NavLink name="Dashboard" icon={RiDashboardLine} />
          <NavLink name="Usuários" icon={RiContrastLine} />
        </NavSection>

        <NavSection title="automação">
          <NavLink name="Formulário" icon={RiInputMethodLine} />
          <NavLink name="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
};
