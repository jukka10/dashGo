import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

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
    </Flex>
  );
};

export default Header;
