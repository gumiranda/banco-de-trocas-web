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
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};
export const Blog = ({
  posts,
}: {
  posts: Array<{ id: number; title: string; excerpt: string }>;
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
      Blog
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {posts.map((post) => (
        <Flex
          key={post.id}
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
            <Heading fontSize="xl" color="orange.500" letterSpacing="tight">
              {post.title}
            </Heading>
            <Text mt={4} color="gray.700" lineHeight="tall">
              {post.excerpt}
            </Text>
          </Stack>
        </Flex>
      ))}
    </SimpleGrid>
  </Container>
);
