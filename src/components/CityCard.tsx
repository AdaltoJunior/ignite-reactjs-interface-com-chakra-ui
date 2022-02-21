import { Box, Image, Flex, Text } from "@chakra-ui/react";

export const CityCard = () => {
  return (
    <Box bg="light.white">
      <Image
        src="/images/continent-city-example.jpg"
        alt="Londres"
        borderRadius="4px 4px 0 0"
      />
      <Flex
        align="center"
        gap="1rem"
        justify="space-between"
        p="1.5rem"
        border="1px solid rgba(255, 186, 8, 0.5)"
        borderRadius="0 0 4px 4px"
      >
        <Flex direction="column" rowGap="0.75rem">
          <Text as="strong" fontSize="1.25rem" fontWeight="bold">Londres</Text>
          <Text as="span" fontSize="1rem" fontWeight="500" color="dark.info">Reino Unido</Text>
        </Flex>
        <Image
          w="30px"
          h="30px"
          objectFit="cover"
          borderRadius="100%"
          src="/images/flag-example.jpg"
          alt="Bandeira Reino Unido"
        />
      </Flex>
    </Box>
  );
};
