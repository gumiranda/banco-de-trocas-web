import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  keyframes,
} from "@chakra-ui/react";
// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};

// 7. Testimonials Component
export const Testimonials = ({
  testimonials,
}: {
  testimonials: Array<{ id: number; name: string; text: string }>;
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
      Depoimentos
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {testimonials.map((testimonial) => (
        <Flex
          key={testimonial.id}
          p={5}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          bg="gray.50"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          animation={`${fadeIn} 0.5s ease-out`}
        >
          <Stack>
            <Text fontWeight="bold" color="orange.500" letterSpacing="tight">
              {testimonial.name}
            </Text>
            <Text mt={4} color="gray.700" lineHeight="tall">
              {testimonial.text}
            </Text>
          </Stack>
        </Flex>
      ))}
    </SimpleGrid>
  </Container>
);
