import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  const authHandler = sessionData ? () => signOut() : () => signIn();
  const authText = sessionData ? "Logout" : "Login";
  return (
    <header>
      <Flex
        direction={["column", "column", "row"]}
        paddingTop="2rem"
        paddingBottom="1rem"
        px="4rem"
        gap={[2, 2, 8]}
        position="fixed"
        minHeight="2rem"
        maxHeight="4rem"
        width="100vw"
        alignItems="center"
      >
        <Text>Planning Poker</Text>
        {sessionData ? <Text>All works</Text> : null}
        <Spacer />
        <Flex direction="row">
          <Button onClick={authHandler}>{authText}</Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
