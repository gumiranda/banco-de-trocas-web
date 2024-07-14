import { Container, Heading, Stack, Text, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};

// 10. FAQ Component
export const FAQ = ({
  faqs,
}: {
  faqs: Array<{ id: number; question: string; answer: string }>;
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
      Perguntas Frequentes
    </Heading>
    <Stack spacing={4} pl={4} borderLeft="4px solid orange.400">
      {faqs.map((faq) => (
        <Stack
          key={faq.id}
          bg="gray.50"
          p={4}
          borderRadius="md"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          animation={`${fadeIn} 0.5s ease-out`}
        >
          <Text fontWeight="bold" color="orange.500" letterSpacing="tight">
            {faq.question}
          </Text>
          <Text color="gray.700" lineHeight="tall">
            {faq.answer}
          </Text>
        </Stack>
      ))}
    </Stack>
  </Container>
);
