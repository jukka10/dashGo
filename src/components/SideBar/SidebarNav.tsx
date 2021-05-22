import { Stack } from "@chakra-ui/react";
import {
  RiContrastLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
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
  );
}