import { getWhatsappLink } from "@/slices/landing-page/utils";
import {
  Button,
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import NextLink from "next/link";
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

export const Sobre = () => {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Box textAlign={"center"}>
        <Avatar size={"xl"} src={"https://iili.io/H6MlvRI.png"} mb={2} />

        <Text color={useColorModeValue("gray.800", "gray.800")} fontWeight={600}>
          Gilson Gonçalves de Aguiar
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.700", "gray.700")}>
          Corretor
        </Text>
      </Box>
      <Text
        color={useColorModeValue("gray.800", "gray.800")}
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        Meu nome é Gilson Gonçalves de Aguiar creci 36.924-f, atuo no ramo imobiliário
        desde 1981. Meu objetivo é criar soluções para a realização de seu negócio
        imobiliário. Tenho amplo conhecimento em imóveis, São Paulo Capital, Litoral Sul e
        Norte do Estado de São Paulo, Interior Paulista. Caso tenha interesse na compra ou
        venda de imóveis no Litoral vai falar com a pessoa certa. Utilizo o sistema de
        trocas com volta ou recebimento de valores facilitando e muito a transação
        imobiliária. Ligue agora (11) 991843119. Deixe seu oi no zap e faça negócio agora
        mesmo.
      </Text>
      <Stack spacing={6} direction={"row"}>
        <NextLink href={getWhatsappLink("Olá")}>
          <Button
            rounded="full"
            px={6}
            colorScheme="green"
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
            size="lg"
            animation={`${bounce} 2s infinite`}
            transition="background-color 0.3s ease"
          >
            Entrar em contato
          </Button>
        </NextLink>
      </Stack>
    </Stack>
  );
};
