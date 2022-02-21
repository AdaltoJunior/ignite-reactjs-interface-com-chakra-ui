import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import { ContinentInfo } from '../../components/ContinentInfo';
import { CityCard } from "../../components/CityCard";

const Continent: NextPage = () => {
  return (
    <Box as="main" pb={["1rem", null, "2.25rem"]}>
      <Box as="section" bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/continent-banner-example.jpg) center / cover">
        <Container maxWidth="container.xl">
          <Flex minHeight={["150px", "500px"]} align={["center", "flex-end"]} justify={["center", "flex-start"]} py={["1rem","3.75rem"]}>
            <Heading color="light.text" fontWeight="bold" fontSize={["1.75rem", "3rem"]}>
              Europa
            </Heading>
          </Flex>
        </Container>
      </Box>

      <Container as="section" maxW="container.xl" py={["1.5rem", null, "5rem"]}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX="4.375rem" spacingY={["1rem", null, "2rem"]} alignItems="center">
          <Text fontSize={{ base: "0.875rem", md: '1.5rem'}} textAlign="justify" lineHeight={{ base: "1.3125rem", md: "2.25rem"}}>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex gap="1rem" justify="space-between">
            <ContinentInfo number="50" text="países" />
            <ContinentInfo number="60" text="línguas" />
            <ContinentInfo number="24" text="cidades +100" info="quantidade de cidades entre as 100 mais visitadas do mundo." />
          </Flex>
        </SimpleGrid>
      </Container>

      <Container as="section" maxW="container.xl">
        <Heading as="h2" fontSize={["1.5rem", null, "2.25rem"]} fontWeight="500" mb={["1.25rem", null, "2.5rem"]}>Cidades +100</Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="45px" justifyContent={["center", "space-between"]}>
          {Array(5).fill(null).map((_, index) => (
            <CityCard key={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Continent;
