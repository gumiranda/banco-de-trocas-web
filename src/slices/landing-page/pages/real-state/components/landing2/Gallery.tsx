import { Container, Heading, SimpleGrid, Image, Box, keyframes } from "@chakra-ui/react";

// Definição de keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Propriedades de animação
const animationProps = {
  animation: `${fadeIn} 1s ease-out`,
};

// 11. Gallery Component
export const Gallery = ({
  images,
}: {
  images: Array<{ id: number; src: string; alt: string }>;
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
      Galeria
    </Heading>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
      {images.map((image) => (
        <Box
          key={image.id}
          overflow="hidden"
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);
