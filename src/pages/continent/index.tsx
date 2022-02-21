import { Box, Container, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import { ContinentInfo } from '../../components/ContinentInfo';
import { CityCard } from "../../components/CityCard";

const Continent: NextPage = () => {
  return (
    <Box as="main" pb="1rem">
      <Box as="section" bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/continent-banner-example.jpg) center / cover">
        <Container maxWidth="container.xl">
          <Flex minHeight="150px" align="center" justify="center">
            <Heading color="light.text" fontWeight="bold" fontSize="1.75rem">
              Europa
            </Heading>
          </Flex>
        </Container>
      </Box>

      <Container as="section" maxW="container.xl" py="1.5rem">
        <Text fontSize="0.875rem" textAlign="justify" lineHeight="1.3125rem">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex mt="1rem" gap="1rem" justify="space-between">
          <ContinentInfo number="50" text="países" />
          <ContinentInfo number="60" text="línguas" />
          <ContinentInfo number="24" text="cidades +100" info="quantidade de cidades entre as 100 mais visitadas do mundo." />
        </Flex>
      </Container>

      <Container as="section" maxW="container.xl">
        <Heading as="h2" fontSize="1.5rem" fontWeight="500" mb="1.25rem">Cidades +100</Heading>
        <Grid gridTemplateColumns="minmax(0, 256px)" justifyContent="center" gap="1.25rem">
          {Array(5).fill(null).map((_, index) => (
            <GridItem key={index}>
              <CityCard />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Continent;
