import { Flex, Container, Heading, Stack, Text, Button, Illustration } from "@/shared/ui";
import NextLink from "next/link";
import { getWhatsappLink } from "@/slices/landing-page/utils";
export const CallToActionWithIllustration = ({ children }: any) => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Negociar um imóvel{" "}
          <Text as={"span"} color={"orange.400"}>
            ficou fácil
          </Text>
        </Heading>
        <Text fontSize={"xl"} color={"gray.300"} maxW={"3xl"}>
          Quer vender ou comprar um imóvel? Escolha o caminho mais seguro e eficiente com
          o Banco de Trocas Imóveis, referência no mercado desde 1992. Afinal negociar seu
          imóvel não precisa ser complicado. Nós simplificamos o processo, garantindo
          segurança e satisfação onde ambas as partes saem ganhando.
        </Text>
        <Text fontSize={"xl"} color={"gray.300"} maxW={"3xl"}>
          Cadastre seu imóvel do Litoral Paulista. Residências, Apartamentos, Sítios,
          Terrenos, Chácaras ou Comerciais.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NextLink href={getWhatsappLink("Olá, gostaria de anunciar um imóvel.")}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Quero anunciar
            </Button>
          </NextLink>
        </Stack>
        <Flex w={"full"}>
          <Illustration height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  );
};
