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

// 13. Team Component
export const Team = ({
  members,
}: {
  members: Array<{ id: number; name: string; role: string }>;
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
      Nosso Time
    </Heading>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
      {members.map((member) => (
        <Stack
          key={member.id}
          p={5}
          shadow="lg"
          borderWidth="1px"
          borderRadius="md"
          bg="white"
          textAlign="center"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Text fontWeight="bold" fontSize="lg" color="orange.500" letterSpacing="tight">
            {member.name}
          </Text>
          <Text color="gray.700" lineHeight="tall">
            {member.role}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  </Container>
);
