import * as React from "react";
import { Box, Button, Center, Flex, Link, Stack, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";

function IndexPage() {
  return (
    <Center flexGrow="1" w="100%" h="100%">
      <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
        <Box mb={16}>
          <Box as={Logo} />
          <Text align="center" fontSize="2xl">
            Media Server With Relationships
          </Text>
        </Box>
        <Stack direction={["column", "row"]} gap={4}>
          <Link isExternal href="https://discord.gg/nDnaZMEA">
            <Button variant={"outline"} colorScheme={"red"}>
              Discord
            </Button>
          </Link>
          <Link isExternal href="https://github.com/meteorae">
            <Button variant={"outline"} colorScheme={"red"}>
              GitHub
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Center>
  );
}

export default IndexPage;
