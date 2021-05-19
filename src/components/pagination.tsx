import { Stack, Button, Box } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="5"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: "pink500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: "pink500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: "pink500",
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: "pink500",
          }}
        >
          5
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: "pink500",
          }}
        >
          6
        </Button>
      </Stack>
    </Stack>
  );
}
