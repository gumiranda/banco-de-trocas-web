import { Box, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { fonts } from "@/app/fonts";

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
