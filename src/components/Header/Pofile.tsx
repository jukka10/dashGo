import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jukka Dev</Text>
          <Text color="gray.300" fontSize="small">
            jukka4996@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        src="https://avatars.githubusercontent.com/u/56303929?v=4"
      />
    </Flex>
  );
}
