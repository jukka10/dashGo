import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

type SidebarContextProps = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarContextProvider({ children }) {
  const disclousure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclousure.onClose();
  }, [router.asPath]);
  return (
    <SidebarContext.Provider value={disclousure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarContext);
