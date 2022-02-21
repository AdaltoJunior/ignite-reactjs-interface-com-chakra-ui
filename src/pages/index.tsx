import type { NextPage } from 'next';
import { Box, Container, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { ContinentsSlider } from '../components/ContinentsSlider';

import { TravelType } from '../components/TravelType';

const Home: NextPage = () => {
  return (
    <>
      <Box as="section"bg="url(/images/home-banner-bg.svg) center / cover">
        <Container maxWidth="container.xl" color="light.text" py={["28px", null, "80px"]}>
          <Flex align="center" justify="space-between" gap="30px">
            <Box maxW="525px">
              <Heading as="h1" fontSize={["1.25rem", null, "2.25rem"]} fontWeight="500" lineHeight={["1.875rem", null, "3.375rem"]}>
                5 Continentes,<br /> infinitas possibilidades.
              </Heading>
              <Text color="light.info" fontSize={["0.875rem", null, "1.25rem"]} mt={["2", null, "1.25rem"]}>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            <Box mb="-120px" display={["none", null, "block"]} flexShrink="0">
              <Image src="/images/airplane.svg" alt="" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container as="section" maxWidth="container.xl" py={["2.25rem", null, "5rem"]}>
        <Flex maxW={["275px", null, 'unset']} flexWrap="wrap" justify={["space-evenly", null, "space-between"]} gap="1.5rem 2rem" mx="auto">
          <TravelType iconPath='/images/icon-cocktail.svg' text='vida noturna' />
          <TravelType iconPath='/images/icon-surf.svg' text='praia' />
          <TravelType iconPath='/images/icon-building.svg' text='moderno' />
          <TravelType iconPath='/images/icon-museum.svg' text='clássico' />
          <TravelType iconPath='/images/icon-earth.svg' text='e mais...' />
        </Flex>
      </Container>

      <Box w={["60px", null, "90px"]} h={["1px", null, "2px"]}bg="dark.text" mx="auto" />

      <Container as="section" maxWidth={{ base: 'unset', lg: 'container.xl' }} py={["1.5rem", null, "2.5rem"]} px="0">
        <Heading
          as="h2"
          textAlign="center"
          fontWeight="500"
          fontSize={["1.25rem", null, "2.25rem"]}
          lineHeight={["1.875rem", null, "3.375rem"]}
          mb={["1.25rem", null, "3.25rem"]}
          px="1rem"
        >
          Vamos nessa?<br />
          Então escolha o seu continente
        </Heading>
        <ContinentsSlider />
      </Container>
    </>
  );
};

export default Home;
