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

// 6. Property List Component
export const PropertyList = ({
  properties,
}: {
  properties: Array<{ id: number; title: string; description: string }>;
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
      Imóveis Disponíveis
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {properties.map((property) => (
        <Flex
          key={property.id}
          p={5}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          bg="white"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          animation={`${fadeIn} 0.5s ease-out`}
        >
          <Stack>
            <Heading fontSize="xl" color="gray.800" letterSpacing="tight">
              {property.title}
            </Heading>
            <Text mt={4} color="gray.800" lineHeight="tall">
              {property.description}
            </Text>
          </Stack>
        </Flex>
      ))}
    </SimpleGrid>
  </Container>
);
