import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { Product } from "./_data";
import { fonts } from "@/app/fonts";
import { PriceTag } from "./PriceTag";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import { getWhatsappLink } from "@/slices/landing-page/utils";
import { SocialButton } from "@/shared/ui/atoms";
import { FaWhatsapp } from "react-icons/fa6";
import ReactHtmlParser from "react-html-parser";

interface Props {
  product: any;
  rootProps?: StackProps;
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const { _id, name, photos, price, salePrice, rating } = product;
  return (
    <Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={photos?.[0]?.url}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
        {/* <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        /> */}
        <SocialButton
          position="absolute"
          top="4"
          right="4"
          label={"Whatsapp"}
          bg="green.500"
          href={getWhatsappLink(`Olá, tenho interesse no imóvel ${name}.`)}
        >
          <FaWhatsapp />
        </SocialButton>
      </Box>
      <Stack>
        <Text
          color={"gray.50"}
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          fontFamily={fonts.inter.style.fontFamily}
          letterSpacing="tighter"
          lineHeight="none"
          mb={4}
          as="p"
        >
          {name}
        </Text>
        <Box
          color={"gray.300"}
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="normal"
          fontFamily={fonts.inter.style.fontFamily}
          letterSpacing="tighter"
          lineHeight="none"
          mb={4}
        >
          {ReactHtmlParser(product?.description?.substring?.(0, 120) + "...")}
        </Box>
        {price && salePrice && (
          <PriceTag price={price} salePrice={salePrice} currency="BRL" />
        )}
        {rating && (
          <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text fontSize="sm" color={"gray.50"}>
              12 Reviews
            </Text>
          </HStack>
        )}
      </Stack>
      <Stack align="center">
        <Link
          size="lg"
          w={"100%"}
          fontFamily={fonts.inter.style.fontFamily}
          href={getWhatsappLink(`Olá, tenho interesse no imóvel ${name}.`)}
        >
          <Button
            size="lg"
            bgColor="primary.700"
            color="white"
            px="0"
            _hover={{ bgColor: "primary.600" }}
            fontWeight={"bold"}
            fontSize="md"
            w={"100%"}
          >
            Tenho interesse
          </Button>
        </Link>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={"gray.100"}
          href={`/imovels/details/${_id}`}
        >
          Ver detalhes
        </Link>
      </Stack>
    </Stack>
  );
};
