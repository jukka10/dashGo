import { Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {array.map((item) => (
          <PaginationItem key={item} isCurrent={item === 1} pageNumber={item} />
        ))}
      </Stack>
    </Stack>
  );
}
