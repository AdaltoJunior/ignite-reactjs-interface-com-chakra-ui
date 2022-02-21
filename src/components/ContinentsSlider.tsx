import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: true,
  navigation: true,
  pagination: {
    clickable: true,
  },
  speed: 800,
};

const continents = [
  {
    id: 0,
    title: "Europa",
    subtitle: "O continente mais antigo."
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet.",
  },
];

export const ContinentsSlider = () => {
  return (
    <Swiper className="slider" {...swiperConfig}>
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Link href="/continent" passHref>
            <Box
              bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/europe.jpg) center / cover"
              w="full"
              h={["250px", null, "450px"]}
            >
              <Flex
                h="full"
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                p="1rem"
                rowGap="0.75rem"
              >
                <Text
                  as="strong"
                  color="light.text"
                  fontSize={["1.5rem", null, "3rem"]}
                  fontWeight="bold"
                >
                  {continent.title}
                </Text>
                <Text
                  color="light.info"
                  fontSize={["0.875rem", null, "1.5rem"]}
                  fontWeight="bold"
                >
                  {continent.subtitle}
                </Text>
              </Flex>
            </Box>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
