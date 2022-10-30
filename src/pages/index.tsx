import { type NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { Flex, Text } from "@chakra-ui/react";
import TaskTabs from "../components/home/taskTabs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<Text>Loading</Text>}>
        <Text>Get back to what's on going</Text>
        <Flex
          direction={["column", "column", "row"]}
          width="100%"
          justifyContent="center"
          gap={32}
          paddingTop={8}
        >
          <TaskTabs />
        </Flex>
      </Suspense>
    </>
  );
};

export default Home;
