import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  const authHandler = sessionData ? () => signOut() : () => signIn();
  const authText = sessionData ? "Logout" : "Login";
  return (
    <header>
      <Flex
        direction="row"
        paddingTop="2rem"
        paddingBottom="1rem"
        px="4rem"
        gap={8}
        position="fixed"
        minHeight="3rem"
        maxHeight="6rem"
        width="100vw"
        alignItems="center"
      >
        <Text>Planning Poker</Text>
        {sessionData && <Text>Your cards</Text>}
        <Spacer />
        <Flex direction="row">
          <Button onClick={authHandler}>{authText}</Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
