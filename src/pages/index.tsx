import type { NextPage } from 'next';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { ContinentsSlider } from '../components/ContinentsSlider';

import { TravelType } from '../components/TravelType';

const Home: NextPage = () => {
  return (
    <>
      <Box as="section" bgImage="/images/home-banner-bg.svg" bgSize="cover">
        <Container maxWidth="container.xl" color="light.text" p="28px 16px">
          <Heading as="h1" fontSize="1.25rem" fontWeight="500" lineHeight="1.875rem">5 Continentes,<br /> infinitas possibilidades.</Heading>
          <Text color="light.info" fontSize="0.875rem" mt="2">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Container>
      </Box>

      <Container as="section" maxWidth="container.xl" py="2.25rem">
        <Flex flexWrap="wrap" justify="space-between" gap="1.5rem 2rem" mx="auto">
          <TravelType iconPath='' text='vida noturna' />
          <TravelType iconPath='' text='praia' />
          <TravelType iconPath='' text='moderno' />
          <TravelType iconPath='' text='clássico' />
          <TravelType iconPath='' text='e mais...' />
        </Flex>
      </Container>

      <Box w="60px" h="1px" bg="dark.text" mx="auto" />

      <Container as="section" maxWidth={{ base: 'unset', lg: 'container.xl' }} py="1.5rem" px="0">
        <Heading as="h2" textAlign="center" fontWeight="500" fontSize="1.25rem" mb="1.25rem" px="1rem">
          Vamos nessa?<br />
          Então escolha o seu continente
        </Heading>
        <ContinentsSlider />
      </Container>
    </>
  );
};

export default Home;
