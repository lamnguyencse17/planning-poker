import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Header from "../components/header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Header />
        <Flex
          paddingTop={["12rem", "12rem", "8rem"]}
          width="100%"
          paddingX="4rem"
          direction="column"
        >
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
