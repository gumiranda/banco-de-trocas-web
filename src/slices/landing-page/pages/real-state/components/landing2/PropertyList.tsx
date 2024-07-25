import { Box, Img } from "@/shared/ui";
import { Flex, Container, Heading, Stack, Text } from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";

// 6. Property List Component
export const PropertyList = ({
  properties,
}: {
  properties: Array<{ id: number; name: string; description: string; images: string[] }>;
}) => (
  <Container maxW="5xl" py={20}>
    <Heading as="h2" size="xl" mb={4} borderBottom="2px solid orange.400" pb={6}>
      Oportunidade de imóvel
    </Heading>
    {properties.map((property) => (
      <Flex
        key={property.id}
        p={5}
        shadow="lg"
        borderWidth="1px"
        borderRadius="md"
        bg="white"
      >
        <Stack>
          <Heading fontSize="xl" color="gray.800" letterSpacing="tight">
            {property.name}
          </Heading>
          <Box mt={4} color="gray.800" lineHeight="tall" fontSize="xl">
            {ReactHtmlParser(property.description)}
          </Box>
          {property?.images?.map?.((image, ix) => (
            <Img key={ix} src={image} alt="Imagem do Imóvel" borderRadius="md" mt={4} />
          ))}
        </Stack>
      </Flex>
    ))}
  </Container>
);
