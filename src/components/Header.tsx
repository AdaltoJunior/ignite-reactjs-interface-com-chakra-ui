import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Container, Flex, Link } from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';

import Logo from '../../public/images/logo.svg';

export function Header() {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <Container as="header" maxWidth="container.xl" py={{ base: '15px', lg: '27px' }}>
      <Flex height="full" alignItems="center">
        {!isHome && (
          <NextLink href="/" passHref>
            <Link>
              <FaChevronLeft size="20px" color="#47585B" />
            </Link>
          </NextLink>
        )}

        <NextLink href="/" passHref>
          <Link mx="auto" display="flex" height={{ base: '36px', lg: 'unset' }}>
            <Image src={Logo} alt="Worldtrip" />
          </Link>
        </NextLink>
      </Flex>
    </Container>
  );
}
