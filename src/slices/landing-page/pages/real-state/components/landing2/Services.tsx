import { Container, Heading, Stack, Text, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 5. Services Component
export const Services = () => (
  <Container maxW="5xl" py={20}>
    <Heading as="h2" size="xl" mb={4} borderBottom="2px solid orange.400" pb={2}>
      Serviços
    </Heading>
    <Stack spacing={4} pl={4} borderLeft="4px solid orange.400">
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        - Venda de imóveis
      </Text>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        - Compra de imóveis
      </Text>
      <Text fontSize="lg" color="gray.300" lineHeight="tall">
        - Avaliação de propriedades
      </Text>
    </Stack>
  </Container>
);
