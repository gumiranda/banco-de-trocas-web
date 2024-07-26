import { Box, Flex, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { fonts } from "@/app/fonts";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@/shared/ui";
export const SeeMoreButton = () => {
  return (
    <Flex>
      <Link
        size="lg"
        w={"100%"}
        fontFamily={fonts.inter.style.fontFamily}
        href={"/maisimoveis"}
        textAlign={"center"}
      >
        <Button
          size="lg"
          color="white"
          px="0"
          colorScheme="green"
          fontWeight={"bold"}
          fontSize="md"
          w={"50%"}
          my={10}
        >
          Ver mais imóveis
        </Button>
      </Link>
    </Flex>
  );
};
export const GridWithAddToCartButton = ({ data }) => {
  const imoveis = data?.imovels ?? [];
  if (imoveis?.length === 0) {
    return null;
  }
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Text
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="normal"
        fontFamily={fonts.inter.style.fontFamily}
        letterSpacing="tighter"
        lineHeight="none"
        mb={4}
        mx={4}
      >
        Confira nossas <strong>oportunidades</strong> disponíveis .
      </Text>
      <br />
      <ProductGrid>
        {imoveis?.map?.((product) => <ProductCard key={product._id} product={product} />)}
      </ProductGrid>
    </Box>
  );
};
