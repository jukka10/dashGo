import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jukka Dev</Text>
        <Text color="gray.300" fontSize="small">
          jukka4996@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        src="https://avatars.githubusercontent.com/u/56303929?v=4"
      />
    </Flex>
  );
}
