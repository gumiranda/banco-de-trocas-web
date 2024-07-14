import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  keyframes,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { getWhatsappLink } from "@/slices/landing-page/utils";
import { Illustration } from "@/shared/ui";

const imageTest =
  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

// 3. Hero Section Component
export const HeroSection = () => (
  <Container maxW="5xl">
    <Stack
      textAlign="center"
      align="center"
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      bg="gray.700"
      borderRadius="lg"
      boxShadow="lg"
      animation={`${slideInLeft} 1s ease-out`}
      transition="all 0.3s ease"
      backgroundImage={`url(${imageTest}), linear-gradient(to right, rgba(255, 136, 0, 0.5), rgba(255, 191, 0, 0.5))`}
      backgroundBlendMode="overlay"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight="110%"
        color="gray.300"
        letterSpacing="tight"
      >
        Negociar um imóvel{" "}
        <Text as="span" color="orange.400">
          ficou fácil
        </Text>
      </Heading>
      <Text fontSize={"xl"} color={"gray.300"} maxW={"3xl"}>
        Quer vender ou comprar um imóvel?
        <br />
        Cadastre seu imóvel do Litoral Paulista. Residências, Apartamentos, Sítios,
        Terrenos, Chácaras ou Comerciais.
      </Text>
      <Stack spacing={6} direction="row">
        <NextLink href={getWhatsappLink("Olá, gostaria de anunciar um imóvel.")}>
          <Button
            rounded="full"
            px={6}
            colorScheme="orange"
            bg="orange.400"
            _hover={{ bg: "orange.500" }}
            size="lg"
            animation={`${bounce} 2s infinite`}
            transition="background-color 0.3s ease"
          >
            Quero anunciar
          </Button>
        </NextLink>
      </Stack>

      <Flex w="full">
        <Illustration height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
      </Flex>
      <Text fontSize="xl" color="gray.300" maxW="3xl">
        Escolha o caminho mais seguro e eficiente com o Banco de Trocas Imóveis,
        referência no mercado desde 1992. Afinal negociar seu imóvel não precisa ser
        complicado. Nós simplificamos o processo, garantindo segurança e satisfação onde
        ambas as partes saem ganhando.
      </Text>
    </Stack>
  </Container>
);
