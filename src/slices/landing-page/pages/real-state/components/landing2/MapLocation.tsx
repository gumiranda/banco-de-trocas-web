import { Container, Heading, Text, Box, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};

// 12. Map Component
export const MapLocation = () => (
  <Container maxW="5xl" py={20}>
    <Heading
      as="h2"
      size="xl"
      mb={4}
      borderBottom="2px solid orange.400"
      pb={2}
      {...animationProps}
    >
      Localização
    </Heading>
    <Box
      w="full"
      h="400px"
      bg="gray.200"
      borderRadius="md"
      boxShadow="lg"
      transition="all 0.3s ease"
    >
      {/* Replace with actual map implementation */}
      <Text textAlign="center" lineHeight="400px" color="gray.500">
        Mapa
      </Text>
    </Box>
  </Container>
);
