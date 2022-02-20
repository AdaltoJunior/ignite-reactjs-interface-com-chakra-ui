import { Box, Flex, Text } from '@chakra-ui/react';

type TravelTypeProps = {
  iconPath: string;
  text: string;
}

export function TravelType({ iconPath, text }: TravelTypeProps) {
  return (
    <Flex align="center" mx={{ base: 'auto', md: 'unset' }}>
      <Box w="8px" h="8px" bg="highlight" borderRadius="100%" mr="8px" />
      <Text fontSize="1.125rem" fontWeight="500">{text}</Text>
    </Flex>
  );
}
