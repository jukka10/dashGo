import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarContextProvider } from "../context/sidebarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarContextProvider>
        <Component {...pageProps} />
      </SidebarContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
