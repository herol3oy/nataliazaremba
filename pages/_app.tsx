import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import theme from "theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
