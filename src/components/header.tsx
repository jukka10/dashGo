import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from "react-icons/ri";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxW={1480}
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashGo
        <Text color="pink.500" as="span" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        alignItems="center"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        position="relative"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Busca na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex alignItems="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20" />
        </HStack>

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
      </Flex>
    </Flex>
  );
};

export default Header;
