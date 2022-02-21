import { Box, Flex, Text, Image } from '@chakra-ui/react';

type TravelTypeProps = {
  iconPath: string;
  text: string;
}

export function TravelType({ iconPath, text }: TravelTypeProps) {
  return (
    <Flex direction={["row", null, "column"]} align="center">
      <Box display={["block", null, "none"]} w="8px" h="8px" bg="highlight" borderRadius="100%" mr="8px" />
      <Image display={["none", null, "block"]} src={iconPath} alt="" mb="1.5rem" />
      <Text fontSize={["1.125rem", null, "1.5rem"]} fontWeight="500">{text}</Text>
    </Flex>
  );
}
