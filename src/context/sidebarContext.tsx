import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarContextProviderProps {
  children: ReactNode;
}

type SidebarContextProps = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const disclousure = useDisclosure();
  return (
    <SidebarContext.Provider value={disclousure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarContext);
