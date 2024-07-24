import { Box, forwardRef } from "@chakra-ui/react";
import { Gallery } from "./Gallery";
import { images } from "./_data";
export const GalleryHorizontal_ = (
  { children, datatestid, photos, ...rest }: any,
  ref
) => {
  return (
    <Box
      maxW="3xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      {...rest}
      ref={ref}
    >
      <Gallery images={photos} />
    </Box>
  );
};
export const GalleryHorizontal = forwardRef(GalleryHorizontal_);
