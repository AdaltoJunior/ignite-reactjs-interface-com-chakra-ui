import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { BsInfoCircle } from 'react-icons/bs';

type ContinentInfoProps = {
  number: string;
  text: string;
  info?: string;
}

export const ContinentInfo = ({ number, text, info }: ContinentInfoProps) => {
  return (
    <Flex direction="column">
      <Text as="span" color="highlight" fontSize="1.5rem" fontWeight="bold" lineHeight="1.6875rem">
        {number}
      </Text>

      <Flex align="baseline" gap="5px">
        <Text as="span" fontSize="1.125rem" whiteSpace="nowrap">
          {text}
        </Text>

        {info && (
          <Tooltip label={info}>
            <div><BsInfoCircle fontSize="14px" color="#999" /></div>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};
