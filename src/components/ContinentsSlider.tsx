import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: true,
  navigation: true,
  pagination: {
    clickable: true
  },
  speed: 800
};

export const ContinentsSlider = () => {
  return (
    <Swiper className='slider' {...swiperConfig}>
      <SwiperSlide>
        <Link href="/continent" passHref>
          <Box bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/europe.jpg) center / cover" w="full" h="250px">
            <Flex h="full" direction="column" align="center" justify="center" textAlign="center" p="1rem" rowGap="0.75rem">
              <Text as="strong" color="light.text" fontSize="1.5rem" fontWeight="bold">
                Europa
              </Text>
              <Text color="light.info" fontSize="0.875rem" fontWeight="bold">
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/continent" passHref>
          <Box bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/europe.jpg) center / cover" w="full" h="250px">
            <Flex h="full" direction="column" align="center" justify="center" textAlign="center" p="1rem" rowGap="0.75rem">
              <Text as="strong" color="light.text" fontSize="1.5rem" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text color="light.info" fontSize="0.875rem" fontWeight="bold">
                Lorem ipsum dolor sit amet.
              </Text>
            </Flex>
          </Box>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
