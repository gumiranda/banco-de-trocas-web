import { Container, Heading, Text, Box, keyframes } from "@chakra-ui/react";
import { css } from "@emotion/react";

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutUs = () => (
  <Container maxW="5xl" py={20}>
    <Heading
      as="h2"
      size="xl"
      mb={4}
      borderBottom="2px solid orange.400"
      pb={2}
      css={css`
        animation: ${fadeIn} 5s ease-out;
      `}
    >
      Sobre Nós
    </Heading>
    <Box mb={6}>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        O Banco de Trocas Imóveis é referência no mercado desde 1992. Nossa missão é
        simplificar o processo de negociação imobiliária, proporcionando uma experiência
        única e eficiente para nossos clientes.
      </Text>
    </Box>
    <Box>
      <Heading as="h3" size="md" mb={2} color="orange.400">
        Nossa Missão
      </Heading>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        Facilitar a compra, venda e troca de imóveis, oferecendo soluções inovadoras e um
        atendimento personalizado para atender às necessidades de cada cliente.
      </Text>
    </Box>
    <Box mt={6}>
      <Heading as="h3" size="md" mb={2} color="orange.400">
        Nossos Valores
      </Heading>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        Transparência, integridade e compromisso com a excelência são os pilares que
        sustentam nossa empresa. Trabalhamos com ética e dedicação para construir
        relacionamentos de confiança e oferecer o melhor serviço no mercado imobiliário.
      </Text>
    </Box>
    <Box mt={6}>
      <Heading as="h3" size="md" mb={2} color="orange.400">
        Por Que Escolher a Gente
      </Heading>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        Com uma equipe de profissionais experientes e uma abordagem centrada no cliente,
        estamos prontos para ajudar você a encontrar o imóvel dos seus sonhos ou a
        realizar a melhor negociação. Nossa expertise e conhecimento do mercado fazem a
        diferença.
      </Text>
    </Box>
  </Container>
);
