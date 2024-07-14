import { Container, Heading, Stack, Text, SimpleGrid, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};
export const Pricing = ({
  plans,
}: {
  plans: Array<{ id: number; title: string; price: string; features: Array<string> }>;
}) => (
  <Container maxW="5xl" py={20}>
    <Heading
      as="h2"
      size="xl"
      mb={4}
      borderBottom="2px solid orange.400"
      pb={2}
      {...animationProps}
    >
      Preços
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {plans.map((plan) => (
        <Stack
          key={plan.id}
          p={5}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          bg="gray.50"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          animation={`${fadeIn} 0.5s ease-out`}
        >
          <Heading fontSize="xl" color="orange.500" letterSpacing="tight">
            {plan.title}
          </Heading>
          <Text fontSize="2xl" color="gray.700" lineHeight="tall">
            {plan.price}
          </Text>
          <Stack spacing={2}>
            {plan.features.map((feature, index) => (
              <Text key={index} color="gray.600" lineHeight="tall">
                - {feature}
              </Text>
            ))}
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  </Container>
);
