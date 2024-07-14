import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SocialButton } from "@/shared/ui/atoms/SocialButton";
import { getWhatsappLink } from "@/slices/landing-page/utils";

export const SmallWithSocial = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} Gilson Gonçalves de Aguiar. Entre já em contato
          pelo Whatsapp (11) 991843119
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Facebook"} href={"https://www.facebook.com/imoveis5060"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Whatsapp"} href={getWhatsappLink("Olá")}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.facebook.com/imoveis5060"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
