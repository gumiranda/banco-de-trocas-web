import { Container, Heading, Stack, Button, Input, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};

// 9. Newsletter Subscription Component
export const NewsletterSubscription = () => (
  <Container maxW="5xl" py={20}>
    <Heading
      as="h2"
      size="xl"
      mb={4}
      borderBottom="2px solid orange.400"
      pb={2}
      {...animationProps}
    >
      Assine nossa Newsletter
    </Heading>
    <Stack spacing={4} direction={{ base: "column", sm: "row" }} align="center">
      <Input
        placeholder="Seu email"
        size="lg"
        focusBorderColor="orange.400"
        name="email"
        _placeholder={{ color: "gray.500" }}
        transition="all 0.3s ease"
        _focus={{ borderColor: "orange.500", boxShadow: "0 0 0 1px orange.500" }}
      />
      <Button
        colorScheme="orange"
        size="lg"
        _hover={{ bg: "orange.500" }}
        transition="background-color 0.3s ease"
      >
        Assinar
      </Button>
    </Stack>
  </Container>
);
