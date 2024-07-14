import { Flex, Heading, Button, keyframes } from "@chakra-ui/react";
import NextLink from "next/link";
import { getWhatsappLink } from "@/slices/landing-page/utils";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const hoverScale = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};
export const Header = () => (
  <Flex
    as="header"
    w="100%"
    py={4}
    justify="space-between"
    align="center"
    bg="gray.800"
    color="white"
    px={8}
    boxShadow="md"
    transition="all 0.3s ease"
    {...animationProps}
  >
    <Heading as="h1" size="lg">
      Corretor Gilson
    </Heading>
    <NextLink href={getWhatsappLink("Olá, gostaria de anunciar um imóvel.")}>
      <Button
        colorScheme="orange"
        size="lg"
        _hover={{
          animation: `${hoverScale} 0.3s ease-in-out forwards`,
          bg: "orange.500",
        }}
        transition="background-color 0.3s ease, transform 0.3s ease"
      >
        Contato
      </Button>
    </NextLink>
  </Flex>
);
